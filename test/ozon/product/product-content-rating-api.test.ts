import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetProductRatingBySku,
  GET_PRODUCT_RATING_BY_SKU_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/rating/get-by-sku/execute.js";

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

describe("ProductAPI content rating", () => {
  it("gets ratings by SKU with safe retries", async () => {
    const mock = transport(
      await fixture("get-product-rating-by-sku.success.json"),
    );

    const response = await executeGetProductRatingBySku(mock, {
      skus: ["600000001"],
    });

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_RATING_BY_SKU_OPERATION_ID,
      method: "POST",
      path: "/v1/product/rating-by-sku",
      body: { skus: ["600000001"] },
      retrySafety: "safe",
    });
    expect(response.products?.[0]?.groups?.[0]?.rating).toBe(70);
  });

  it("rejects malformed improvement counts", async () => {
    await expect(
      executeGetProductRatingBySku(
        transport(await fixture("get-product-rating-by-sku.malformed.json")),
        { skus: ["600000001"] },
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_RATING_BY_SKU_OPERATION_ID,
    });
  });
});
