import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetProductStocksByWarehouseFbs,
  GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/stocks/get-by-warehouse-fbs/v1/execute.js";
import type { GetProductStocksByWarehouseFbsRequest } from "../../../packages/ozon/src/endpoints/product/stocks/get-by-warehouse-fbs/v1/types.js";

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

const input: GetProductStocksByWarehouseFbsRequest = {
  sku: ["600000001"],
};

describe("ProductAPI FBS warehouse stocks v1", () => {
  it("gets FBS warehouse stocks with safe retries", async () => {
    const mock = transport(
      await fixture("get-product-stocks-by-warehouse-fbs.success.json"),
    );

    const response = await executeGetProductStocksByWarehouseFbs(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_OPERATION_ID,
      method: "POST",
      path: "/v1/product/info/stocks-by-warehouse/fbs",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.[0]).toMatchObject({
      present: 100,
      reserved: 10,
      warehouse_name: "Test FBS warehouse",
    });
  });

  it("rejects malformed present stock counts", async () => {
    await expect(
      executeGetProductStocksByWarehouseFbs(
        transport(
          await fixture("get-product-stocks-by-warehouse-fbs.malformed.json"),
        ),
        input,
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_OPERATION_ID,
    });
  });
});
