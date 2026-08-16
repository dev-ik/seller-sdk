import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetRelatedProductSkus,
  GET_RELATED_PRODUCT_SKUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/sku/related/execute.js";

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

describe("ProductAPI related SKU", () => {
  it("gets related SKU groups and per-item errors with safe retries", async () => {
    const mock = transport(
      await fixture("get-related-product-skus.success.json"),
    );
    const input = { sku: ["600000001", "600000003"] };

    const response = await executeGetRelatedProductSkus(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_RELATED_PRODUCT_SKUS_OPERATION_ID,
      method: "POST",
      path: "/v1/product/related-sku/get",
      body: input,
      retrySafety: "safe",
    });
    expect(response.items?.[0]).toMatchObject({
      availability: "AVAILABLE",
      sku: 600000001,
    });
    expect(response.errors?.[0]?.code).toBe("SKU_NOT_FOUND");
  });

  it("rejects malformed deletion timestamps", async () => {
    await expect(
      executeGetRelatedProductSkus(
        transport(await fixture("get-related-product-skus.malformed.json")),
        { sku: ["600000001"] },
      ),
    ).rejects.toMatchObject({
      operationId: GET_RELATED_PRODUCT_SKUS_OPERATION_ID,
    });
  });
});
