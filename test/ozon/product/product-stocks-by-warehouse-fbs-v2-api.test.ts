import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetProductStocksByWarehouseFbsV2,
  GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/stocks/get-by-warehouse-fbs/v2/execute.js";
import type { GetProductStocksByWarehouseFbsV2Request } from "../../../packages/ozon/src/endpoints/product/stocks/get-by-warehouse-fbs/v2/types.js";

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

const input: GetProductStocksByWarehouseFbsV2Request = {
  cursor: "TEST-FBS-STOCKS-CURSOR-001",
  limit: 1000,
  offer_id: ["TEST-OFFER-FBS-STOCK-001"],
};

describe("ProductAPI FBS warehouse stocks v2", () => {
  it("gets paginated FBS warehouse stocks with safe retries", async () => {
    const mock = transport(
      await fixture("get-product-stocks-by-warehouse-fbs-v2.success.json"),
    );

    const response = await executeGetProductStocksByWarehouseFbsV2(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_V2_OPERATION_ID,
      method: "POST",
      path: "/v2/product/info/stocks-by-warehouse/fbs",
      body: input,
      retrySafety: "safe",
    });
    expect(response.cursor).toBe("TEST-FBS-STOCKS-CURSOR-002");
    expect(response.products?.[0]).toMatchObject({
      free_stock: 90,
      present: 100,
      reserved: 10,
      warehouse_name: "Test FBS warehouse",
    });
  });

  it("rejects malformed pagination flags", async () => {
    await expect(
      executeGetProductStocksByWarehouseFbsV2(
        transport(
          await fixture(
            "get-product-stocks-by-warehouse-fbs-v2.malformed.json",
          ),
        ),
        input,
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_V2_OPERATION_ID,
    });
  });
});
