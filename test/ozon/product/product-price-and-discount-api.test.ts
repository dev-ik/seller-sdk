import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetDiscountedProductInfo,
  GET_DISCOUNTED_PRODUCT_INFO_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/discount/get-info/execute.js";
import {
  executeUpdateProductDiscount,
  UPDATE_PRODUCT_DISCOUNT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/discount/update/execute.js";
import {
  executeGetProductPrices,
  GET_PRODUCT_PRICES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/prices/get-info/execute.js";
import {
  executeGetProductMinPriceTimerStatus,
  GET_PRODUCT_MIN_PRICE_TIMER_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/prices/get-min-price-timer-status/execute.js";

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

describe("ProductAPI price and discount batch", () => {
  it("gets minimum-price timer statuses as a safe read", async () => {
    const mock = transport(
      await fixture("get-product-min-price-timer-status.success.json"),
    );
    const input = { product_ids: ["500000001", "500000002"] } as const;

    const response = await executeGetProductMinPriceTimerStatus(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_MIN_PRICE_TIMER_STATUS_OPERATION_ID,
      method: "POST",
      path: "/v1/product/action/timer/status",
      body: input,
      retrySafety: "safe",
    });
    expect(response.statuses?.[1]?.expired_at).toBe("");
  });

  it("gets product prices with cursor pagination", async () => {
    const mock = transport(await fixture("get-product-prices.success.json"));
    const input = {
      cursor: "",
      filter: { visibility: "ALL" as const },
      limit: 100,
    };

    const response = await executeGetProductPrices(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_PRICES_OPERATION_ID,
      method: "POST",
      path: "/v5/product/info/prices",
      body: input,
      retrySafety: "safe",
    });
    expect(response.items?.[0]?.price_indexes?.color_index).toBe("GREEN");
  });

  it("gets discounted product information as a safe read", async () => {
    const mock = transport(
      await fixture("get-discounted-product-info.success.json"),
    );
    const input = { discounted_skus: ["635548518"] } as const;

    const response = await executeGetDiscountedProductInfo(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_DISCOUNTED_PRODUCT_INFO_OPERATION_ID,
      method: "POST",
      path: "/v1/product/info/discounted",
      body: input,
      retrySafety: "safe",
    });
    expect(response.items?.[0]?.sku).toBe(320067758);
  });

  it("updates a discounted-product discount without retries", async () => {
    const mock = transport(
      await fixture("update-product-discount.success.json"),
    );
    const input = { discount: 15, product_id: 500000001 };

    const response = await executeUpdateProductDiscount(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_PRODUCT_DISCOUNT_OPERATION_ID,
      method: "POST",
      path: "/v1/product/update/discount",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result).toBe(true);
  });

  it.each([
    {
      operationId: GET_PRODUCT_MIN_PRICE_TIMER_STATUS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeGetProductMinPriceTimerStatus(mock, { product_ids: ["1"] }),
      body: { statuses: [{ product_id: "not-a-number" }] },
    },
    {
      operationId: GET_PRODUCT_PRICES_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeGetProductPrices(mock, { filter: {}, limit: 1 }),
      body: { items: [{ price: { price: "not-a-number" } }] },
    },
    {
      operationId: GET_DISCOUNTED_PRODUCT_INFO_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeGetDiscountedProductInfo(mock, { discounted_skus: ["1"] }),
      body: { items: [{ discounted_sku: "not-a-number" }] },
    },
    {
      operationId: UPDATE_PRODUCT_DISCOUNT_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeUpdateProductDiscount(mock, { discount: 10, product_id: 1 }),
      body: { result: "not-a-boolean" },
    },
  ])("rejects malformed $operationId responses", async (testCase) => {
    await expect(testCase.run(transport(testCase.body))).rejects.toMatchObject({
      operationId: testCase.operationId,
    });
  });
});
