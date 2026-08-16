import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetProductStocks,
  GET_PRODUCT_STOCKS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/stocks/get-info/execute.js";
import type { GetProductStocksRequest } from "../../../packages/ozon/src/endpoints/product/stocks/get-info/types.js";

async function fixture(name: string): Promise<unknown> {
  return JSON.parse(
    await readFile(
      new URL(`../../fixtures/ozon/${name}`, import.meta.url),
      "utf8",
    ),
  ) as unknown;
}

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

const input: GetProductStocksRequest = {
  cursor: "TEST-PRODUCT-STOCKS-CURSOR-001",
  filter: {
    offer_id: ["TEST-OFFER-STOCK-001"],
    visibility: "ALL",
    with_quant: { created: true, exists: true },
  },
  limit: 100,
};

describe("ProductAPI stock information", () => {
  it("gets paginated stock information with safe retries", async () => {
    const mock = transport(await fixture("get-product-stocks.success.json"));

    const response = await executeGetProductStocks(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_STOCKS_OPERATION_ID,
      method: "POST",
      path: "/v4/product/info/stocks",
      body: input,
      retrySafety: "safe",
    });
    expect(response.cursor).toBe("TEST-PRODUCT-STOCKS-CURSOR-002");
    expect(response.items?.[0]?.stocks?.[0]).toMatchObject({
      present: 150,
      reserved: 25,
      shipment_type: "SHIPMENT_TYPE_GENERAL",
      type: "fbs",
    });
  });

  it("rejects malformed reserved stock counts", async () => {
    await expect(
      executeGetProductStocks(
        transport(await fixture("get-product-stocks.malformed.json")),
        input,
      ),
    ).rejects.toMatchObject({ operationId: GET_PRODUCT_STOCKS_OPERATION_ID });
  });
});
