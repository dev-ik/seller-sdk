import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  APPROVE_DISCOUNT_TASKS_OPERATION_ID,
  executeApproveDiscountTasks,
} from "../../../packages/ozon/src/endpoints/promotion/discount-task/approve/v1/execute.js";
import {
  DECLINE_DISCOUNT_TASKS_OPERATION_ID,
  executeDeclineDiscountTasks,
} from "../../../packages/ozon/src/endpoints/promotion/discount-task/decline/v1/execute.js";

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

describe("Discount task mutations", () => {
  it("approves discount tasks without automatic retries", async () => {
    const mock = transport(
      await fixture("approve-discount-tasks.success.json"),
    );
    const input = {
      tasks: [
        {
          id: 1001,
          approved_price: 1450,
          approved_quantity_min: 1,
          approved_quantity_max: 3,
          seller_comment: "Synthetic approval",
        },
      ],
    };

    const response = await executeApproveDiscountTasks(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: APPROVE_DISCOUNT_TASKS_OPERATION_ID,
      method: "POST",
      path: "/v1/actions/discounts-task/approve",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.success_count).toBe(1);
  });

  it("declines discount tasks without automatic retries", async () => {
    const mock = transport(
      await fixture("decline-discount-tasks.success.json"),
    );
    const input = {
      tasks: [{ id: 1001, seller_comment: "Synthetic decline" }],
    };

    const response = await executeDeclineDiscountTasks(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: DECLINE_DISCOUNT_TASKS_OPERATION_ID,
      method: "POST",
      path: "/v1/actions/discounts-task/decline",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.fail_count).toBe(0);
  });

  it.each([
    {
      operationId: APPROVE_DISCOUNT_TASKS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeApproveDiscountTasks(mock, {
          tasks: [
            {
              id: 1,
              approved_price: 100,
              approved_quantity_min: 1,
              approved_quantity_max: 1,
            },
          ],
        }),
      body: { result: { success_count: "not-a-number" } },
    },
    {
      operationId: DECLINE_DISCOUNT_TASKS_OPERATION_ID,
      run: (mock: MockTransport) =>
        executeDeclineDiscountTasks(mock, { tasks: [{ id: 1 }] }),
      body: { result: { fail_details: [{ task_id: false }] } },
    },
  ])("rejects malformed $operationId responses", async (testCase) => {
    await expect(testCase.run(transport(testCase.body))).rejects.toMatchObject({
      operationId: testCase.operationId,
    });
  });
});
