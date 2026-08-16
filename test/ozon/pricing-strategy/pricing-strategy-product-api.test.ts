import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  DELETE_PRICING_STRATEGY_OPERATION_ID,
  executeDeletePricingStrategy,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/delete/execute.js";
import {
  DELETE_PRODUCTS_FROM_PRICING_STRATEGY_OPERATION_ID,
  executeDeleteProductsFromPricingStrategy,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/products/delete/execute.js";
import {
  executeGetPricingStrategyProductInfo,
  GET_PRICING_STRATEGY_PRODUCT_INFO_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/products/get-info/execute.js";
import {
  executeUpdatePricingStrategyStatus,
  UPDATE_PRICING_STRATEGY_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/status/update/execute.js";

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

describe("Pricing strategy product and lifecycle API", () => {
  it("gets competitor price information as a safe read", async () => {
    const mock = transport(
      await fixture("get-pricing-strategy-product-info.success.json"),
    );
    const input = { product_id: 500000001 };
    const response = await executeGetPricingStrategyProductInfo(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRICING_STRATEGY_PRODUCT_INFO_OPERATION_ID,
      path: "/v1/pricing-strategy/product/info",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.strategy_product_price).toBe(1450);
  });

  it("deletes products from strategies without automatic retries", async () => {
    const mock = transport(
      await fixture("delete-products-from-pricing-strategy.success.json"),
    );
    const input = { product_id: ["500000001"] };
    const response = await executeDeleteProductsFromPricingStrategy(
      mock,
      input,
    );

    expect(mock.requests[0]).toMatchObject({
      operationId: DELETE_PRODUCTS_FROM_PRICING_STRATEGY_OPERATION_ID,
      path: "/v1/pricing-strategy/products/delete",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.failed_product_count).toBe(0);
  });

  it("updates strategy status without automatic retries", async () => {
    const mock = transport(
      await fixture("update-pricing-strategy-status.success.json"),
    );
    const input = { enabled: false, strategy_id: "strategy-test-001" };
    await expect(
      executeUpdatePricingStrategyStatus(mock, input),
    ).resolves.toEqual({});

    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_PRICING_STRATEGY_STATUS_OPERATION_ID,
      path: "/v1/pricing-strategy/status",
      body: input,
      retrySafety: "unsafe",
    });
  });

  it("deletes a strategy without automatic retries", async () => {
    const mock = transport(
      await fixture("delete-pricing-strategy.success.json"),
    );
    const input = { strategy_id: "strategy-test-001" };
    await expect(executeDeletePricingStrategy(mock, input)).resolves.toEqual(
      {},
    );

    expect(mock.requests[0]).toMatchObject({
      operationId: DELETE_PRICING_STRATEGY_OPERATION_ID,
      path: "/v1/pricing-strategy/delete",
      body: input,
      retrySafety: "unsafe",
    });
  });

  it.each([
    {
      operationId: GET_PRICING_STRATEGY_PRODUCT_INFO_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeGetPricingStrategyProductInfo(mock, { product_id: 1 }),
      body: { result: { is_enabled: "not-a-boolean" } },
    },
    {
      operationId: DELETE_PRODUCTS_FROM_PRICING_STRATEGY_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeDeleteProductsFromPricingStrategy(mock, { product_id: ["1"] }),
      body: { result: { failed_product_count: "not-a-number" } },
    },
    {
      operationId: UPDATE_PRICING_STRATEGY_STATUS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeUpdatePricingStrategyStatus(mock, {
          enabled: true,
          strategy_id: "test",
        }),
      body: null,
    },
    {
      operationId: DELETE_PRICING_STRATEGY_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeDeletePricingStrategy(mock, { strategy_id: "test" }),
      body: null,
    },
  ])("rejects malformed $operationId responses", async (testCase) => {
    await expect(testCase.run(transport(testCase.body))).rejects.toMatchObject({
      operationId: testCase.operationId,
    });
  });
});
