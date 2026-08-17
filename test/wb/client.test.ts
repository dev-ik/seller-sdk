import { afterEach, describe, expect, it, vi } from "vitest";
import {
  ApiError,
  ConfigurationError,
  Marketplace,
  ResponseValidationError,
  SellerClient,
  WB_OPERATION_ALIASES,
  WB_OPERATION_METADATA,
  WbApiHost,
  WbClient,
  WbValues,
} from "../../packages/seller-sdk/src/index.js";

const credentials = { token: "test-wb-token" };

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("WbClient", () => {
  it("constructs focused and typed umbrella clients without exposing the token", () => {
    const direct = new WbClient(credentials);
    const seller = new SellerClient({
      marketplace: Marketplace.Wb,
      credentials,
    });

    expect(seller.marketplace).toBe("wb");
    expect(seller.client).toBeInstanceOf(WbClient);
    expect(seller.wb).toBeInstanceOf(WbClient);
    expect(seller.ozon).toBeUndefined();
    expect(direct).toBeInstanceOf(WbClient);
    expect(JSON.stringify(seller)).not.toContain(credentials.token);
    expect(JSON.stringify(direct)).not.toContain(credentials.token);
  });

  it("maps authentication, fixed origin and query parameters", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        jsonResponse({ TS: "2026-08-17T12:00:00+05:00", Status: "OK" }),
      )
      .mockResolvedValueOnce(jsonResponse({ data: [] }));
    vi.stubGlobal("fetch", fetchMock);
    const wb = new WbClient(credentials);

    await expect(wb.general.getPing()).resolves.toMatchObject({ Status: "OK" });
    await expect(
      wb.general.getNews({ query: { from: "2026-08-01", fromID: 42 } }),
    ).resolves.toEqual({ data: [] });
    expect(wb.general.getV2News).toBeTypeOf("function");

    const [pingUrl, pingInit] = fetchMock.mock.calls[0]!;
    expect(String(pingUrl)).toBe("https://common-api.wildberries.ru/ping");
    expect(new Headers(pingInit?.headers).get("Authorization")).toBe(
      credentials.token,
    );
    expect(String(fetchMock.mock.calls[1]![0])).toBe(
      "https://common-api.wildberries.ru/api/communications/v2/news?from=2026-08-01&fromID=42",
    );
  });

  it("maps a typed JSON mutation body and never retries mutations", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        jsonResponse({ title: "failure", detail: "synthetic failure" }, 500),
      );
    vi.stubGlobal("fetch", fetchMock);
    const wb = new WbClient(credentials, { maxRetries: 3 });

    try {
      await wb.general.postInvite({
        body: { invite: { phoneNumber: "70000000000", position: "Analyst" } },
      });
      throw new Error("Expected the WB mutation to fail.");
    } catch (error) {
      expect(error).toBeInstanceOf(ApiError);
      expect(error).toMatchObject({ apiMessage: "synthetic failure" });
      expect(JSON.stringify(error)).not.toContain(credentials.token);
    }

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(wb.general.postV1Invite).toBeTypeOf("function");
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe(
      "https://user-management-api.wildberries.ru/api/v1/invite",
    );
    expect(init?.method).toBe("POST");
    expect(JSON.parse(String(init?.body))).toEqual({
      invite: { phoneNumber: "70000000000", position: "Analyst" },
    });
  });

  it("validates structured responses through generated SafeShape contracts", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse({ TS: 123, Status: "BROKEN" }));
    vi.stubGlobal("fetch", fetchMock);
    const wb = new WbClient(credentials);

    await expect(wb.general.getPing()).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: "getPing",
    });
  });

  it("handles status-dependent JSON and binary responses", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        jsonResponse({ moderationState: "pending", retrySeconds: 10 }, 202),
      )
      .mockResolvedValueOnce(
        new Response(new Uint8Array([1, 2, 3]), {
          status: 200,
          headers: { "content-type": "application/pdf" },
        }),
      );
    vi.stubGlobal("fetch", fetchMock);
    const wb = new WbClient(credentials);

    await expect(
      wb.communications.getSellerDownloadId({ path: { id: "file id" } }),
    ).resolves.toEqual({ moderationState: "pending", retrySeconds: 10 });
    const binary = await wb.communications.getSellerDownloadId({
      path: { id: "file id" },
    });

    expect(binary).toBeInstanceOf(ArrayBuffer);
    expect(wb.communications.getV1SellerDownloadId).toBeTypeOf("function");
    expect(String(fetchMock.mock.calls[0]![0])).toBe(
      "https://buyer-chat-api.wildberries.ru/api/v1/seller/download/file%20id",
    );
  });

  it("rejects undocumented sandbox routes before sending the token", async () => {
    const fetchMock = vi.fn<typeof fetch>();
    vi.stubGlobal("fetch", fetchMock);
    const wb = new WbClient(credentials, { environment: "sandbox" });

    await expect(wb.general.getPing()).rejects.toBeInstanceOf(
      ConfigurationError,
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("keeps raw requests on a closed documented origin", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse({ future: true }));
    vi.stubGlobal("fetch", fetchMock);
    const wb = new WbClient(credentials);

    await expect(
      wb.rawRequest<{ future: boolean }>(
        WbApiHost.Common,
        "GET",
        "/api/future",
      ),
    ).resolves.toMatchObject({ data: { future: true } });
    expect(String(fetchMock.mock.calls[0]![0])).toBe(
      "https://common-api.wildberries.ru/api/future",
    );
  });

  it("validates dynamic credentials and keeps secret values out of errors", () => {
    const secret = "must-not-appear";

    try {
      new WbClient({ token: "" }, { environment: secret as "production" });
      throw new Error("Expected WbClient construction to fail.");
    } catch (error) {
      expect(error).toBeInstanceOf(ConfigurationError);
      expect(String(error)).not.toContain(secret);
      expect(JSON.stringify(error)).not.toContain(secret);
    }
  });

  it("publishes metadata for every local Swagger operation", () => {
    expect(WB_OPERATION_METADATA).toHaveLength(286);
    expect(
      new Set(WB_OPERATION_METADATA.map((item) => item.methodName)).size,
    ).toBe(286);
    expect(
      WB_OPERATION_METADATA.every((item) => item.verifiedAt === "2026-08-17"),
    ).toBe(true);
    expect(
      Object.values(WB_OPERATION_ALIASES).flatMap((domain) =>
        Object.keys(domain),
      ),
    ).toHaveLength(282);
    expect(WB_OPERATION_ALIASES.general.getNews).toBe("getV2News");
    expect(WB_OPERATION_ALIASES.promotion.getAdverts).toBe("getV2Adverts");
    expect(WB_OPERATION_ALIASES.promotion.postNormqueryStats).toBe(
      "postV1NormqueryStats",
    );
    expect(WB_OPERATION_ALIASES.promotion.postNormqueryBids).toBe(
      "postV1NormqueryBids",
    );
    expect(WbValues.GeneralSubscriptionsJamInfoState.Active).toBe("active");
  });
});
