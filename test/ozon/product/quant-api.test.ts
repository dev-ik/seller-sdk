import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  executeGetQuantProductsInfo,
  GET_QUANT_PRODUCTS_INFO_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/quant/get-info/execute.js";
import {
  executeListQuantProducts,
  LIST_QUANT_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/quant/list/execute.js";

const credentials = {
  clientId: "test-client-id",
  apiKey: "test-api-key",
};

async function fixture(name: string): Promise<unknown> {
  const fileUrl = new URL(`../../fixtures/ozon/${name}`, import.meta.url);
  return JSON.parse(await readFile(fileUrl, "utf8")) as unknown;
}

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

function jsonResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), { status: 200 });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Ozon Quants endpoints", () => {
  it("maps listQuantProducts with cursor pagination", async () => {
    const body = await fixture("list-quant-products.success.json");
    const transport = transportWith(body);
    const input = {
      cursor: "test-cursor",
      limit: 1000,
      visibility: "ALL" as const,
    };

    await expect(executeListQuantProducts(transport, input)).resolves.toEqual(
      body,
    );
    expect(transport.requests).toEqual([
      {
        operationId: LIST_QUANT_PRODUCTS_OPERATION_ID,
        method: "POST",
        path: "/v1/product/quant/list",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("maps getQuantProductsInfo and preserves wire field names", async () => {
    const body = await fixture("get-quant-products-info.success.json");
    const transport = transportWith(body);
    const input = { quant_code: ["TEST-QUANT-001"] };

    await expect(
      executeGetQuantProductsInfo(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_QUANT_PRODUCTS_INFO_OPERATION_ID,
        method: "POST",
        path: "/v1/product/quant/info",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it.each([
    [
      LIST_QUANT_PRODUCTS_OPERATION_ID,
      "list-quant-products.malformed.json",
      (transport: MockTransport) =>
        executeListQuantProducts(transport, { limit: 100 }),
    ],
    [
      GET_QUANT_PRODUCTS_INFO_OPERATION_ID,
      "get-quant-products-info.malformed.json",
      (transport: MockTransport) =>
        executeGetQuantProductsInfo(transport, {
          quant_code: ["TEST-QUANT-001"],
        }),
    ],
  ])(
    "rejects malformed quant responses for %s",
    async (operationId, fixtureName, execute) => {
      const transport = transportWith(await fixture(fixtureName));

      await expect(execute(transport)).rejects.toMatchObject({
        name: ResponseValidationError.name,
        operationId,
      });
    },
  );

  it("exposes both quant methods through SellerClient", async () => {
    const responses = await Promise.all([
      fixture("list-quant-products.success.json"),
      fixture("get-quant-products-info.success.json"),
    ]);
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => jsonResponse(responses.shift()));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await seller.ozon.products.listQuantProducts({ limit: 100 });
    await seller.ozon.products.getQuantProductsInfo({
      quant_code: ["TEST-QUANT-001"],
    });

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v1/product/quant/list",
      "https://api-seller.ozon.ru/v1/product/quant/info",
    ]);
    for (const [, init] of fetchMock.mock.calls) {
      const headers = new Headers(init?.headers);
      expect(headers.get("Client-Id")).toBe(credentials.clientId);
      expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    }
  });
});
