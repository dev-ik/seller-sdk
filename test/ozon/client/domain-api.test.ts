import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConfigurationError } from "../../../packages/ozon/src/index.js";
import { OzonClient } from "../../../packages/ozon/src/client.js";
import {
  ozonDomainAliases,
  ozonDomainMethods,
} from "../../../packages/ozon/src/domain-methods.js";

const credentials = {
  clientId: "test-client-id",
  apiKey: "test-api-key",
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Ozon domain API", () => {
  it("groups every manifest method into exactly one public domain", async () => {
    const manifest = JSON.parse(
      await readFile(
        new URL("../../../docs/ozon/endpoints.json", import.meta.url),
        "utf8",
      ),
    ) as { operations: readonly { sdkMethod: string }[] };
    const groupedMethods = Object.values(ozonDomainMethods).flat();
    const client = new OzonClient(credentials);
    const rootApi = client as unknown as Record<string, unknown>;
    const domains = client.domains as unknown as Record<
      string,
      Record<string, unknown>
    >;

    expect(groupedMethods).toHaveLength(manifest.operations.length);
    expect(new Set(groupedMethods).size).toBe(manifest.operations.length);
    expect(new Set(groupedMethods)).toEqual(
      new Set(manifest.operations.map(({ sdkMethod }) => sdkMethod)),
    );

    for (const [domainName, methodNames] of Object.entries(ozonDomainMethods)) {
      expect(rootApi[domainName]).toBe(domains[domainName]);
      for (const methodName of methodNames) {
        expect(domains[domainName]?.[methodName]).toBeTypeOf("function");
      }
    }
  });

  it("provides canonical product, posting, and finance aliases", () => {
    const client = new OzonClient(credentials);

    expect("listProducts" in client).toBe(false);
    expect(
      (client as unknown as Record<string, unknown>)["listProducts"],
    ).toBeUndefined();
    expect(client.products.list).toBe(client.products.listProducts);
    expect(client.products.prices.get).toBe(client.products.getProductPrices);
    expect(client.products.stocks.update).toBe(
      client.products.updateProductStocks,
    );
    expect(client.postings.fbo.list).toBe(client.postings.listFboPostingsV3);
    expect(client.postings.fbs.list).toBe(client.postings.listFbsPostingsV4);
    expect(client.finance.accruals.byDay).toBe(
      client.finance.getFinanceAccrualByDayV1,
    );
    expect(client.finance.accruals.byPostings).toBe(
      client.finance.getFinanceAccrualPostingsV1,
    );
    expect(client.finance.accruals.types).toBe(
      client.finance.listFinanceAccrualTypesV1,
    );
  });

  it("provides a recommended versionless alias for every versioned method", () => {
    const client = new OzonClient(credentials);
    const domains = client.domains as unknown as Record<
      string,
      Record<string, unknown>
    >;

    for (const [domainName, aliases] of Object.entries(ozonDomainAliases)) {
      for (const [alias, versionedMethod] of Object.entries(aliases)) {
        expect(domains[domainName]?.[alias]).toBe(
          domains[domainName]?.[versionedMethod],
        );
      }
    }

    expect(client.finance.listFinanceTransactions).toBe(
      client.finance.listFinanceTransactionsV3,
    );
    expect(client.warehouses.listWarehouses).toBe(
      client.warehouses.listWarehousesV2,
    );
  });

  it("keeps bound domain methods callable", async () => {
    const body = JSON.parse(
      await readFile(
        new URL("../../fixtures/ozon/get-roles.success.json", import.meta.url),
        "utf8",
      ),
    ) as unknown;
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response(JSON.stringify(body), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    const client = new OzonClient(credentials);

    await expect(client.access.getRoles()).resolves.toEqual(body);
    expect(fetchMock).toHaveBeenCalledOnce();
    expect(String(fetchMock.mock.calls[0]?.[0])).toBe(
      "https://api-seller.ozon.ru/v1/roles",
    );
  });

  it("supports authenticated raw requests with response metadata", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify({ custom: true }), {
        status: 200,
        headers: { "X-Request-Id": "raw-request-1" },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);
    const client = new OzonClient(credentials);

    const response = await client.rawRequest<{ custom: boolean }>(
      "POST",
      "/v1/custom",
      { limit: 1 },
      { retrySafety: "safe", maxRetries: 0 },
    );

    expect(response).toMatchObject({
      data: { custom: true },
      lastResponse: {
        status: 200,
        requestId: "raw-request-1",
        attempt: 1,
        operationId: "RawRequest:POST:/v1/custom",
      },
    });
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toBe("https://api-seller.ozon.ru/v1/custom");
    expect(new Headers(init?.headers).get("Client-Id")).toBe(
      credentials.clientId,
    );
    expect(new Headers(init?.headers).get("Api-Key")).toBe(credentials.apiKey);
  });

  it("keeps raw requests on the fixed Ozon origin", async () => {
    const fetchMock = vi.fn<typeof fetch>();
    vi.stubGlobal("fetch", fetchMock);
    const client = new OzonClient(credentials);

    await expect(
      client.rawRequest("GET", "https://example.com/private"),
    ).rejects.toBeInstanceOf(ConfigurationError);
    await expect(
      client.rawRequest("GET", "/v1/test", { unexpected: true }),
    ).rejects.toBeInstanceOf(ConfigurationError);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("iterates all product pages using the returned cursor", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            result: {
              items: [{ offer_id: "offer-1", product_id: 1 }],
              last_id: "cursor-1",
              total: 2,
            },
          }),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            result: {
              items: [{ offer_id: "offer-2", product_id: 2 }],
              last_id: "cursor-2",
              total: 2,
            },
          }),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({ result: { items: [], last_id: "cursor-2" } }),
          { status: 200 },
        ),
      );
    vi.stubGlobal("fetch", fetchMock);
    const client = new OzonClient(credentials);
    const items = [];

    for await (const item of client.products.listAll({
      filter: {},
      limit: 1,
    })) {
      items.push(item.offer_id);
    }

    expect(items).toEqual(["offer-1", "offer-2"]);
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(JSON.parse(String(fetchMock.mock.calls[0]?.[1]?.body))).toEqual({
      filter: {},
      limit: 1,
    });
    expect(JSON.parse(String(fetchMock.mock.calls[1]?.[1]?.body))).toEqual({
      filter: {},
      limit: 1,
      last_id: "cursor-1",
    });
  });

  it("applies client retry defaults and reports each response", async () => {
    const onResponse = vi.fn();
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ message: "temporary" }), {
          status: 503,
          headers: { "Retry-After": "0" },
        }),
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ roles: [] }), { status: 200 }),
      );
    vi.stubGlobal("fetch", fetchMock);
    const client = new OzonClient(credentials, { maxRetries: 1, onResponse });

    await expect(client.access.getRoles()).resolves.toEqual({ roles: [] });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(onResponse).toHaveBeenCalledTimes(2);
  });
});
