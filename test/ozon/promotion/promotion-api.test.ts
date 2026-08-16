import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListDiscountTasks,
  LIST_DISCOUNT_TASKS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/promotion/discount-task/list/v1/execute.js";
import {
  executeListPromotions,
  LIST_PROMOTIONS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/promotion/list/execute.js";
import {
  ACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID,
  executeActivatePromotionProducts,
} from "../../../packages/ozon/src/endpoints/promotion/products/activate/execute.js";
import {
  DEACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID,
  executeDeactivatePromotionProducts,
} from "../../../packages/ozon/src/endpoints/promotion/products/deactivate/execute.js";
import {
  executeListPromotionCandidates,
  LIST_PROMOTION_CANDIDATES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/promotion/products/list-candidates/execute.js";
import {
  executeListPromotionProducts,
  LIST_PROMOTION_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/promotion/products/list-participating/execute.js";

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

describe("Promotion API batch", () => {
  it("lists promotions with GET and safe retries", async () => {
    const mock = transport(await fixture("list-promotions.success.json"));
    const response = await executeListPromotions(mock);

    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_PROMOTIONS_OPERATION_ID,
      method: "GET",
      path: "/v1/actions",
      retrySafety: "safe",
    });
    expect(response.result?.[0]?.title).toBe("Synthetic promotion");
  });

  it("lists promotion candidates with formal numeric pagination", async () => {
    const mock = transport(
      await fixture("list-promotion-candidates.success.json"),
    );
    const input = { action_id: 71342, limit: 100, last_id: 0 };
    const response = await executeListPromotionCandidates(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_PROMOTION_CANDIDATES_OPERATION_ID,
      path: "/v1/actions/candidates",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.last_id).toBe(17);
  });

  it("lists products participating in a promotion", async () => {
    const mock = transport(
      await fixture("list-promotion-products.success.json"),
    );
    const input = { action_id: 71342, limit: 100 };
    const response = await executeListPromotionProducts(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_PROMOTION_PRODUCTS_OPERATION_ID,
      path: "/v1/actions/products",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.products?.[0]?.add_mode).toBe("MANUAL");
  });

  it("activates promotion products without automatic retries", async () => {
    const mock = transport(
      await fixture("activate-promotion-products.success.json"),
    );
    const input = {
      action_id: 71342,
      products: [{ product_id: 1389, action_price: 100 }],
    };
    const response = await executeActivatePromotionProducts(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: ACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID,
      path: "/v1/actions/products/activate",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.product_ids).toEqual([1389]);
  });

  it("deactivates promotion products without automatic retries", async () => {
    const mock = transport(
      await fixture("deactivate-promotion-products.success.json"),
    );
    const input = { action_id: 71342, product_ids: [14975, 14976] };
    const response = await executeDeactivatePromotionProducts(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: DEACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID,
      path: "/v1/actions/products/deactivate",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.rejected?.[0]?.product_id).toBe(14976);
  });

  it("lists deprecated v1 discount tasks with page pagination", async () => {
    const mock = transport(await fixture("list-discount-tasks.success.json"));
    const input = { status: "APPROVED" as const, page: 1, limit: 50 };
    const response = await executeListDiscountTasks(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_DISCOUNT_TASKS_OPERATION_ID,
      path: "/v1/actions/discounts-task/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.[0]?.email).toBe("customer@example.invalid");
  });

  it.each([
    {
      operationId: LIST_PROMOTIONS_OPERATION_ID,
      run: (mock: MockTransport) => executeListPromotions(mock),
      body: { result: [{ is_participating: "not-a-boolean" }] },
    },
    {
      operationId: LIST_PROMOTION_CANDIDATES_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeListPromotionCandidates(mock, { action_id: 1 }),
      body: { result: { products: [{ price: "not-a-number" }] } },
    },
    {
      operationId: LIST_PROMOTION_PRODUCTS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeListPromotionProducts(mock, { action_id: 1 }),
      body: { result: { total: "not-a-number" } },
    },
    {
      operationId: ACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeActivatePromotionProducts(mock, {
          action_id: 1,
          products: [{ product_id: 1, action_price: 1 }],
        }),
      body: { result: { product_ids: ["not-a-number"] } },
    },
    {
      operationId: DEACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeDeactivatePromotionProducts(mock, {
          action_id: 1,
          product_ids: [1],
        }),
      body: { result: { rejected: [{ reason: false }] } },
    },
    {
      operationId: LIST_DISCOUNT_TASKS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeListDiscountTasks(mock, { status: "NEW", page: 1, limit: 1 }),
      body: { result: [{ id: "not-a-number" }] },
    },
  ])("rejects malformed $operationId responses", async (testCase) => {
    await expect(testCase.run(transport(testCase.body))).rejects.toMatchObject({
      operationId: testCase.operationId,
    });
  });
});
