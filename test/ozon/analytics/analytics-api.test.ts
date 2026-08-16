import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  executeGetAnalyticsStockOnWarehouses,
  GET_ANALYTICS_STOCK_ON_WAREHOUSES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/analytics/get-stock-on-warehouses/execute.js";
import {
  executeGetAnalyticsStocks,
  GET_ANALYTICS_STOCKS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/analytics/get-stocks/execute.js";
import {
  executeGetAnalyticsStocksTurnover,
  GET_ANALYTICS_STOCKS_TURNOVER_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/analytics/get-stocks-turnover/execute.js";

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

describe("Ozon AnalyticsAPI endpoints", () => {
  it("maps the deprecated stock-on-warehouses report", async () => {
    const body = await fixture(
      "get-analytics-stock-on-warehouses.success.json",
    );
    const transport = transportWith(body);
    const input = { limit: 1000, offset: 0, warehouse_type: "ALL" as const };

    await expect(
      executeGetAnalyticsStockOnWarehouses(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_ANALYTICS_STOCK_ON_WAREHOUSES_OPERATION_ID,
        method: "POST",
        path: "/v2/analytics/stock_on_warehouses",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("maps stocks turnover analytics", async () => {
    const body = await fixture("get-analytics-stocks-turnover.success.json");
    const transport = transportWith(body);
    const input = { sku: ["100000001"] };

    await expect(
      executeGetAnalyticsStocksTurnover(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: GET_ANALYTICS_STOCKS_TURNOVER_OPERATION_ID,
        method: "POST",
        path: "/v1/analytics/turnover/stocks",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("maps current stocks analytics and its filters", async () => {
    const body = await fixture("get-analytics-stocks.success.json");
    const transport = transportWith(body);
    const input = {
      cluster_ids: ["1001"],
      item_tags: ["NOVEL"] as const,
      placement_zone: ["SORT"] as const,
      skus: ["100000001"],
      turnover_grades: ["POPULAR"] as const,
      warehouse_ids: ["3001"],
    };

    await expect(executeGetAnalyticsStocks(transport, input)).resolves.toEqual(
      body,
    );
    expect(transport.requests).toEqual([
      {
        operationId: GET_ANALYTICS_STOCKS_OPERATION_ID,
        method: "POST",
        path: "/v1/analytics/stocks",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it.each([
    [
      GET_ANALYTICS_STOCK_ON_WAREHOUSES_OPERATION_ID,
      "get-analytics-stock-on-warehouses.malformed.json",
      (transport: MockTransport) =>
        executeGetAnalyticsStockOnWarehouses(transport, { limit: 100 }),
    ],
    [
      GET_ANALYTICS_STOCKS_TURNOVER_OPERATION_ID,
      "get-analytics-stocks-turnover.malformed.json",
      (transport: MockTransport) =>
        executeGetAnalyticsStocksTurnover(transport, {}),
    ],
    [
      GET_ANALYTICS_STOCKS_OPERATION_ID,
      "get-analytics-stocks.malformed.json",
      (transport: MockTransport) =>
        executeGetAnalyticsStocks(transport, { skus: [] }),
    ],
  ])(
    "rejects malformed analytics responses for %s",
    async (operationId, fixtureName, execute) => {
      const transport = transportWith(await fixture(fixtureName));

      await expect(execute(transport)).rejects.toMatchObject({
        name: ResponseValidationError.name,
        operationId,
      });
    },
  );

  it("exposes all analytics methods through SellerClient", async () => {
    const responses = await Promise.all([
      fixture("get-analytics-stock-on-warehouses.success.json"),
      fixture("get-analytics-stocks-turnover.success.json"),
      fixture("get-analytics-stocks.success.json"),
    ]);
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => jsonResponse(responses.shift()));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await seller.ozon.analytics.getAnalyticsStockOnWarehouses({ limit: 100 });
    await seller.ozon.analytics.getAnalyticsStocksTurnover({
      sku: ["100000001"],
    });
    await seller.ozon.analytics.getAnalyticsStocks({ skus: ["100000001"] });

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v2/analytics/stock_on_warehouses",
      "https://api-seller.ozon.ru/v1/analytics/turnover/stocks",
      "https://api-seller.ozon.ru/v1/analytics/stocks",
    ]);
    for (const [, init] of fetchMock.mock.calls) {
      const headers = new Headers(init?.headers);
      expect(headers.get("Client-Id")).toBe(credentials.clientId);
      expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    }
  });
});
