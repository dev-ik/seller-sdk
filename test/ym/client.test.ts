import { afterEach, describe, expect, it, vi } from "vitest";
import {
  ConfigurationError,
  Marketplace,
  RateLimitError,
  ResponseValidationError,
  SellerClient,
  YM_OPERATION_METADATA,
  YmClient,
  YmValues,
} from "../../packages/seller-sdk/src/index.js";

const credentials = { apiKey: "test-ym-api-key" };

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("YmClient", () => {
  it("constructs focused and typed umbrella clients without exposing the API key", () => {
    const direct = new YmClient(credentials);
    const seller = new SellerClient({
      marketplace: Marketplace.Ym,
      credentials,
    });

    expect(seller.marketplace).toBe("ym");
    expect(seller.client).toBeInstanceOf(YmClient);
    expect(seller.ym).toBeInstanceOf(YmClient);
    expect(seller.ozon).toBeUndefined();
    expect(seller.wb).toBeUndefined();
    expect(direct).toBeInstanceOf(YmClient);
    expect(JSON.stringify(seller)).not.toContain(credentials.apiKey);
    expect(JSON.stringify(direct)).not.toContain(credentials.apiKey);
  });

  it("maps Api-Key authentication, fixed origin, path, query and JSON body", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse({ orders: [] }));
    vi.stubGlobal("fetch", fetchMock);
    const ym = new YmClient(credentials);

    await expect(
      ym.orders.getBusinessOrders({
        path: { businessId: 123456 },
        query: { pageToken: "next page", limit: 25 },
        body: {},
      }),
    ).resolves.toEqual({ orders: [] });

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe(
      "https://api.partner.market.yandex.ru/v1/businesses/123456/orders?pageToken=next+page&limit=25",
    );
    expect(init?.method).toBe("POST");
    expect(new Headers(init?.headers).get("Api-Key")).toBe(credentials.apiKey);
    expect(new Headers(init?.headers).get("Authorization")).toBeNull();
    expect(JSON.parse(String(init?.body))).toEqual({});
  });

  it("parses recursive CategoryDTO contracts through SafeShape lazy schemas", async () => {
    const response = {
      status: "OK",
      result: {
        id: 1,
        name: "Root",
        children: [{ id: 2, name: "Child", children: [] }],
      },
    };
    const regionResponse = {
      region: {
        id: 2,
        name: "Child",
        type: "CITY",
        parent: { id: 1, name: "Parent", type: "REGION" },
      },
    };
    vi.stubGlobal(
      "fetch",
      vi
        .fn<typeof fetch>()
        .mockResolvedValueOnce(jsonResponse(response))
        .mockResolvedValueOnce(jsonResponse(regionResponse)),
    );

    const ym = new YmClient(credentials);
    await expect(
      ym.categories.getCategoriesTree({ body: {} }),
    ).resolves.toEqual(response);
    await expect(
      ym.regions.searchRegionsById({ path: { regionId: 2 } }),
    ).resolves.toEqual(regionResponse);
  });

  it("returns documented binary responses as ArrayBuffer", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn<typeof fetch>().mockResolvedValue(
        new Response(new Uint8Array([1, 2, 3]), {
          status: 200,
          headers: { "content-type": "application/pdf" },
        }),
      ),
    );

    await expect(
      new YmClient(credentials).orderLabels.generateOrderLabels({
        path: { campaignId: 1, orderId: 2 },
      }),
    ).resolves.toBeInstanceOf(ArrayBuffer);
  });

  it("validates structured responses through generated contracts", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn<typeof fetch>()
        .mockResolvedValue(
          jsonResponse({ status: "OK", result: { id: "broken" } }),
        ),
    );

    await expect(
      new YmClient(credentials).categories.getCategoriesTree({ body: {} }),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: "getCategoriesTree",
    });
  });

  it("maps nested errors and HTTP 420 to RateLimitError without retrying", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        jsonResponse(
          { status: "ERROR", errors: [{ code: "LIMIT", message: "Wait" }] },
          420,
        ),
      );
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      new YmClient(credentials, { maxRetries: 3 }).regions.getRegionsCodes(),
    ).rejects.toMatchObject({
      name: RateLimitError.name,
      status: 420,
      apiCode: "LIMIT",
      apiMessage: "Wait",
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("maps multipart bodies without overriding the FormData content type", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse({ status: "OK" }));
    vi.stubGlobal("fetch", fetchMock);
    const body = new FormData();
    body.append("file", new Blob(["file"]), "file.txt");

    await new YmClient(credentials).chats.sendFileToChat({
      path: { businessId: 10 },
      query: { chatId: 20 },
      body,
    });

    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe(
      "https://api.partner.market.yandex.ru/v2/businesses/10/chats/file/send?chatId=20",
    );
    expect(init?.body).toBe(body);
    expect(new Headers(init?.headers).get("content-type")).toBeNull();
  });

  it("validates credentials and exposes all official operations", () => {
    expect(() => new YmClient({ apiKey: "" })).toThrow(ConfigurationError);
    expect(YM_OPERATION_METADATA).toHaveLength(165);
    expect(
      new Set(YM_OPERATION_METADATA.map((item) => item.operationId)).size,
    ).toBe(165);
    expect(
      YM_OPERATION_METADATA.every((item) => item.verifiedAt === "2026-08-19"),
    ).toBe(true);
    expect(YmValues.OrdersOrderStatusType.Processing).toBe("PROCESSING");
    expect(
      YM_OPERATION_METADATA.every(
        (item) => !/V\d+(?=[A-Z]|$)/u.test(item.methodName),
      ),
    ).toBe(true);
  });
});
