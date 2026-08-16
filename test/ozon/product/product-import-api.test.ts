import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeImportProductsBySku,
  IMPORT_PRODUCTS_BY_SKU_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/import/by-sku/execute.js";
import {
  executeImportProducts,
  IMPORT_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/import/create/execute.js";
import type { ImportProductsRequest } from "../../../packages/ozon/src/endpoints/product/import/create/types.js";
import {
  executeGetProductImportStatus,
  GET_PRODUCT_IMPORT_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/import/get-status/execute.js";

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

const input: ImportProductsRequest = {
  items: [
    {
      attributes: [],
      description_category_id: 100000001,
      depth: 100,
      dimension_unit: "mm",
      height: 200,
      offer_id: "TEST-OFFER-001",
      price: "1000.00",
      type_id: 100001,
      weight: 500,
      weight_unit: "g",
      width: 150,
    },
  ],
};

describe("ProductAPI import", () => {
  it("maps product import without automatic retries", async () => {
    const mock = transport(await fixture("import-products.success.json"));

    const response = await executeImportProducts(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: IMPORT_PRODUCTS_OPERATION_ID,
      method: "POST",
      path: "/v3/product/import",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.task_id).toBe(400000001);
  });

  it("rejects a malformed import task identifier", async () => {
    await expect(
      executeImportProducts(
        transport(await fixture("import-products.malformed.json")),
        input,
      ),
    ).rejects.toMatchObject({ operationId: IMPORT_PRODUCTS_OPERATION_ID });
  });

  it("gets product import status with safe retries", async () => {
    const mock = transport(
      await fixture("get-product-import-status.success.json"),
    );

    const response = await executeGetProductImportStatus(mock, {
      task_id: 400000001,
    });

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_IMPORT_STATUS_OPERATION_ID,
      method: "POST",
      path: "/v1/product/import/info",
      body: { task_id: 400000001 },
      retrySafety: "safe",
    });
    expect(response.result?.items?.[1]?.errors?.[0]?.code).toBe("TEST_ERROR");
  });

  it("rejects malformed product import diagnostics", async () => {
    await expect(
      executeGetProductImportStatus(
        transport(await fixture("get-product-import-status.malformed.json")),
        { task_id: 400000001 },
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_IMPORT_STATUS_OPERATION_ID,
    });
  });

  it("imports products by SKU without automatic retries", async () => {
    const mock = transport(
      await fixture("import-products-by-sku.success.json"),
    );
    const input = {
      items: [
        {
          currency_code: "RUB",
          name: "TEST PRODUCT",
          offer_id: "TEST-OFFER-003",
          old_price: "1100.00",
          price: "1000.00",
          sku: 500000001,
          vat: "0.2",
        },
      ],
    };

    const response = await executeImportProductsBySku(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: IMPORT_PRODUCTS_BY_SKU_OPERATION_ID,
      method: "POST",
      path: "/v1/product/import-by-sku",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.unmatched_sku_list).toEqual([500000002]);
  });

  it("rejects malformed unmatched SKU values", async () => {
    await expect(
      executeImportProductsBySku(
        transport(await fixture("import-products-by-sku.malformed.json")),
        { items: [{ sku: 500000001 }] },
      ),
    ).rejects.toMatchObject({
      operationId: IMPORT_PRODUCTS_BY_SKU_OPERATION_ID,
    });
  });
});
