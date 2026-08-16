import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetProductStocksByWarehouse,
  GET_PRODUCT_STOCKS_BY_WAREHOUSE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/stocks/get-by-warehouse/execute.js";
import type { GetProductStocksByWarehouseRequest } from "../../../packages/ozon/src/endpoints/product/stocks/get-by-warehouse/types.js";

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

const input: GetProductStocksByWarehouseRequest = {
  cursor: "TEST-WAREHOUSE-STOCKS-CURSOR-001",
  limit: 1000,
  warehouse_id: 700000001,
};

describe("ProductAPI warehouse stocks", () => {
  it("gets paginated warehouse stocks with safe retries", async () => {
    const mock = transport(
      await fixture("get-product-stocks-by-warehouse.success.json"),
    );

    const response = await executeGetProductStocksByWarehouse(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_STOCKS_BY_WAREHOUSE_OPERATION_ID,
      method: "POST",
      path: "/v1/product/info/warehouse/stocks",
      body: input,
      retrySafety: "safe",
    });
    expect(response.has_next).toBe(true);
    expect(response.stocks?.[0]).toMatchObject({
      free_stock: 90,
      present: 100,
      reserved: 10,
      warehouse_id: 700000001,
    });
  });

  it("rejects malformed stock update dates", async () => {
    await expect(
      executeGetProductStocksByWarehouse(
        transport(
          await fixture("get-product-stocks-by-warehouse.malformed.json"),
        ),
        input,
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_STOCKS_BY_WAREHOUSE_OPERATION_ID,
    });
  });
});
