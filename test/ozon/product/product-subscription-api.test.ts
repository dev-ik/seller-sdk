import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetProductSubscriptionCounts,
  GET_PRODUCT_SUBSCRIPTION_COUNTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/info/subscription/execute.js";

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

describe("ProductAPI subscription counts", () => {
  it("gets subscriber counts for multiple SKUs with safe retries", async () => {
    const mock = transport(
      await fixture("get-product-subscription-counts.success.json"),
    );
    const input = { skus: ["600000001", "600000002"] };

    const response = await executeGetProductSubscriptionCounts(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_SUBSCRIPTION_COUNTS_OPERATION_ID,
      method: "POST",
      path: "/v1/product/info/subscription",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.[0]).toMatchObject({
      count: 3,
      sku: 600000001,
    });
    expect(response.result?.[1]?.count).toBe(0);
  });

  it("rejects non-integer subscription counts", async () => {
    await expect(
      executeGetProductSubscriptionCounts(
        transport(
          await fixture("get-product-subscription-counts.malformed.json"),
        ),
        { skus: ["600000001"] },
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_SUBSCRIPTION_COUNTS_OPERATION_ID,
    });
  });
});
