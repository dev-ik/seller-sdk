import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListPricingCompetitors,
  LIST_PRICING_COMPETITORS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/competitors/list/execute.js";
import {
  CREATE_PRICING_STRATEGY_OPERATION_ID,
  executeCreatePricingStrategy,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/create/execute.js";
import {
  executeGetPricingStrategy,
  GET_PRICING_STRATEGY_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/get-info/execute.js";
import {
  executeListPricingStrategies,
  LIST_PRICING_STRATEGIES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/list/execute.js";
import {
  ADD_PRODUCTS_TO_PRICING_STRATEGY_OPERATION_ID,
  executeAddProductsToPricingStrategy,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/products/add/execute.js";
import {
  executeGetPricingStrategyIdsByProductIds,
  GET_PRICING_STRATEGY_IDS_BY_PRODUCT_IDS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/products/get-strategy-ids/execute.js";
import {
  executeListPricingStrategyProducts,
  LIST_PRICING_STRATEGY_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/products/list/execute.js";
import {
  executeUpdatePricingStrategy,
  UPDATE_PRICING_STRATEGY_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/pricing-strategy/update/execute.js";

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

const competitor = { coefficient: 0.95, competitor_id: 101 } as const;

describe("Pricing strategy API", () => {
  it("lists competitors with page pagination", async () => {
    const mock = transport(
      await fixture("list-pricing-competitors.success.json"),
    );
    const input = { page: 1, limit: 100 };
    const response = await executeListPricingCompetitors(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_PRICING_COMPETITORS_OPERATION_ID,
      path: "/v1/pricing-strategy/competitors/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.competitor?.[0]?.id).toBe(101);
  });

  it("lists pricing strategies with page pagination", async () => {
    const mock = transport(
      await fixture("list-pricing-strategies.success.json"),
    );
    const input = { page: 1, limit: 100 };
    const response = await executeListPricingStrategies(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_PRICING_STRATEGIES_OPERATION_ID,
      path: "/v1/pricing-strategy/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.strategies?.[0]?.enabled).toBe(true);
  });

  it("creates a pricing strategy without automatic retries", async () => {
    const mock = transport(
      await fixture("create-pricing-strategy.success.json"),
    );
    const input = {
      competitors: [competitor],
      strategy_name: "Synthetic strategy",
    };
    const response = await executeCreatePricingStrategy(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: CREATE_PRICING_STRATEGY_OPERATION_ID,
      path: "/v1/pricing-strategy/create",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.strategy_id).toBe("strategy-test-002");
  });

  it("gets pricing strategy information as a safe read", async () => {
    const mock = transport(await fixture("get-pricing-strategy.success.json"));
    const input = { strategy_id: "strategy-test-001" };
    const response = await executeGetPricingStrategy(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRICING_STRATEGY_OPERATION_ID,
      path: "/v1/pricing-strategy/info",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.competitors?.[0]?.coefficient).toBe(0.95);
  });

  it("updates a pricing strategy without automatic retries", async () => {
    const mock = transport(
      await fixture("update-pricing-strategy.success.json"),
    );
    const input = {
      competitors: [competitor],
      strategy_id: "strategy-test-001",
      strategy_name: "Updated synthetic strategy",
    };
    await expect(executeUpdatePricingStrategy(mock, input)).resolves.toEqual(
      {},
    );

    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_PRICING_STRATEGY_OPERATION_ID,
      path: "/v1/pricing-strategy/update",
      body: input,
      retrySafety: "unsafe",
    });
  });

  it("adds products to a strategy without automatic retries", async () => {
    const mock = transport(
      await fixture("add-products-to-pricing-strategy.success.json"),
    );
    const input = {
      product_id: ["500000001", "500000002"],
      strategy_id: "strategy-test-001",
    };
    const response = await executeAddProductsToPricingStrategy(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: ADD_PRODUCTS_TO_PRICING_STRATEGY_OPERATION_ID,
      path: "/v1/pricing-strategy/products/add",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.failed_product_count).toBe(1);
  });

  it("gets strategy identifiers by product identifiers", async () => {
    const mock = transport(
      await fixture("get-pricing-strategy-ids-by-product-ids.success.json"),
    );
    const input = { product_id: ["500000001"] };
    const response = await executeGetPricingStrategyIdsByProductIds(
      mock,
      input,
    );

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRICING_STRATEGY_IDS_BY_PRODUCT_IDS_OPERATION_ID,
      path: "/v1/pricing-strategy/strategy-ids-by-product-ids",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.products_info?.[0]?.strategy_id).toBe(
      "strategy-test-001",
    );
  });

  it("lists product identifiers in a pricing strategy", async () => {
    const mock = transport(
      await fixture("list-pricing-strategy-products.success.json"),
    );
    const input = { strategy_id: "strategy-test-001" };
    const response = await executeListPricingStrategyProducts(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_PRICING_STRATEGY_PRODUCTS_OPERATION_ID,
      path: "/v1/pricing-strategy/products/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.product_id).toEqual(["500000001", "500000002"]);
  });

  it.each([
    {
      operationId: LIST_PRICING_COMPETITORS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeListPricingCompetitors(mock, { page: 1, limit: 1 }),
      body: { competitor: [{ id: "not-a-number" }] },
    },
    {
      operationId: LIST_PRICING_STRATEGIES_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeListPricingStrategies(mock, { page: 1, limit: 1 }),
      body: { strategies: [{ enabled: "not-a-boolean" }] },
    },
    {
      operationId: CREATE_PRICING_STRATEGY_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeCreatePricingStrategy(mock, {
          competitors: [competitor],
          strategy_name: "Test",
        }),
      body: { result: { strategy_id: false } },
    },
    {
      operationId: GET_PRICING_STRATEGY_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeGetPricingStrategy(mock, { strategy_id: "test" }),
      body: { result: { competitors: [{ competitor_id: 1 }] } },
    },
    {
      operationId: UPDATE_PRICING_STRATEGY_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeUpdatePricingStrategy(mock, {
          competitors: [competitor],
          strategy_id: "test",
          strategy_name: "Test",
        }),
      body: null,
    },
    {
      operationId: ADD_PRODUCTS_TO_PRICING_STRATEGY_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeAddProductsToPricingStrategy(mock, {
          product_id: ["1"],
          strategy_id: "test",
        }),
      body: { result: { failed_product_count: "not-a-number" } },
    },
    {
      operationId: GET_PRICING_STRATEGY_IDS_BY_PRODUCT_IDS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeGetPricingStrategyIdsByProductIds(mock, { product_id: ["1"] }),
      body: { result: { products_info: [{ strategy_id: false }] } },
    },
    {
      operationId: LIST_PRICING_STRATEGY_PRODUCTS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeListPricingStrategyProducts(mock, { strategy_id: "test" }),
      body: { result: { product_id: [1] } },
    },
  ])("rejects malformed $operationId responses", async (testCase) => {
    await expect(testCase.run(transport(testCase.body))).rejects.toMatchObject({
      operationId: testCase.operationId,
    });
  });
});
