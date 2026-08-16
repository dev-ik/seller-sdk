import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeUpdateProductStocks,
  UPDATE_PRODUCT_STOCKS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/stocks/update/execute.js";
import type { UpdateProductStocksRequest } from "../../../packages/ozon/src/endpoints/product/stocks/update/types.js";

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

const input: UpdateProductStocksRequest = {
  stocks: [
    {
      offer_id: "TEST-OFFER-STOCK-001",
      stock: 100,
      warehouse_id: 700000001,
    },
  ],
};

describe("ProductAPI stocks", () => {
  it("updates stock without automatic retries and preserves item errors", async () => {
    const mock = transport(await fixture("update-product-stocks.success.json"));

    const response = await executeUpdateProductStocks(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_PRODUCT_STOCKS_OPERATION_ID,
      method: "POST",
      path: "/v2/products/stocks",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.[0]?.updated).toBe(true);
    expect(response.result?.[1]).toMatchObject({
      updated: false,
      errors: [{ code: "TOO_MANY_REQUESTS" }],
    });
  });

  it("rejects malformed update flags", async () => {
    await expect(
      executeUpdateProductStocks(
        transport(await fixture("update-product-stocks.malformed.json")),
        input,
      ),
    ).rejects.toMatchObject({
      operationId: UPDATE_PRODUCT_STOCKS_OPERATION_ID,
    });
  });
});
