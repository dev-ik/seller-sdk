import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListFboPostingCancelReasons,
  LIST_FBO_POSTING_CANCEL_REASONS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbo/cancel-reason/list/v1/execute.js";
import {
  executeGetFboPostingV2,
  GET_FBO_POSTING_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbo/get/v2/execute.js";
import {
  executeListFboPostingsV2,
  LIST_FBO_POSTINGS_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbo/list/v2/execute.js";
import {
  executeListFboPostingsV3,
  LIST_FBO_POSTINGS_V3_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbo/list/v3/execute.js";
import {
  executeGetSupplyOrderDetails,
  GET_SUPPLY_ORDER_DETAILS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/details/get/v1/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("FBO posting lists and supply-order details", () => {
  it("lists FBO postings v2 with offset pagination", async () => {
    const input = {
      filter: {
        since: "2026-08-01T00:00:00Z",
        to: "2026-08-15T00:00:00Z",
      },
      limit: 100,
      offset: 0,
    };
    const mock = transport({
      result: [
        {
          order_id: 100000001,
          posting_number: "TEST-POSTING-001",
          created_at: "2026-08-01T00:00:00Z",
          products: [{ sku: 200000001, quantity: 1 }],
        },
      ],
    });
    const response = await executeListFboPostingsV2(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_FBO_POSTINGS_V2_OPERATION_ID,
      path: "/v2/posting/fbo/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.[0]?.order_id).toBe(100000001);
  });

  it("lists FBO postings v3 with cursor pagination", async () => {
    const input = { limit: 100, sort_dir: "ASC" as const };
    const mock = transport({
      cursor: "test-next-cursor",
      has_next: true,
      postings: [
        {
          posting_number: "TEST-POSTING-001",
          financial_data: {
            products: [
              { commission: { amount: 10, currency: "RUB", percent: 5 } },
            ],
          },
        },
      ],
    });
    const response = await executeListFboPostingsV3(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_FBO_POSTINGS_V3_OPERATION_ID,
      path: "/v3/posting/fbo/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.cursor).toBe("test-next-cursor");
  });

  it("gets one FBO posting v2", async () => {
    const input = { posting_number: "TEST-POSTING-001" };
    const mock = transport({
      result: {
        posting_number: "TEST-POSTING-001",
        fact_delivery_date: "2026-08-10T00:00:00Z",
        external_order: { is_external: false },
      },
    });
    const response = await executeGetFboPostingV2(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: GET_FBO_POSTING_V2_OPERATION_ID,
      path: "/v2/posting/fbo/get",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.posting_number).toBe("TEST-POSTING-001");
  });

  it("lists FBO posting cancellation reasons", async () => {
    const mock = transport({ reasons: [{ id: 1, name: "Synthetic reason" }] });
    const response = await executeListFboPostingCancelReasons(mock);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_FBO_POSTING_CANCEL_REASONS_OPERATION_ID,
      path: "/v1/posting/fbo/cancel-reason/list",
      retrySafety: "safe",
    });
    expect(response.reasons?.[0]?.id).toBe(1);
  });

  it("gets supply-order details", async () => {
    const input = { order_id: 100000001 };
    const mock = transport({
      order_id: 100000001,
      state: "IN_TRANSIT",
      created_date: "2026-08-01T00:00:00Z",
      supplies: [
        {
          supply_id: 200000001,
          supply_state: "IN_TRANSIT",
          cancellation_allowability: {
            can_set: false,
            can_not_set_reasons: ["INVALID_SUPPLY_STATE"],
          },
        },
      ],
    });
    const response = await executeGetSupplyOrderDetails(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: GET_SUPPLY_ORDER_DETAILS_OPERATION_ID,
      path: "/v1/supply-order/details",
      body: input,
      retrySafety: "safe",
    });
    expect(response.supplies?.[0]?.supply_state).toBe("IN_TRANSIT");
  });

  it.each([
    [
      LIST_FBO_POSTINGS_V2_OPERATION_ID,
      (mock: MockTransport) =>
        executeListFboPostingsV2(mock, {
          filter: { since: "2026-08-01T00:00:00Z", to: "2026-08-15T00:00:00Z" },
          limit: 1,
        }),
      { result: [{ order_id: "bad" }] },
    ],
    [
      LIST_FBO_POSTINGS_V3_OPERATION_ID,
      (mock: MockTransport) => executeListFboPostingsV3(mock),
      {
        postings: [
          {
            financial_data: { products: [{ commission: { percent: "bad" } }] },
          },
        ],
      },
    ],
    [
      GET_FBO_POSTING_V2_OPERATION_ID,
      (mock: MockTransport) =>
        executeGetFboPostingV2(mock, { posting_number: "test" }),
      { result: { fact_delivery_date: "not-a-date" } },
    ],
    [
      LIST_FBO_POSTING_CANCEL_REASONS_OPERATION_ID,
      (mock: MockTransport) => executeListFboPostingCancelReasons(mock),
      { reasons: [{ id: "bad" }] },
    ],
    [
      GET_SUPPLY_ORDER_DETAILS_OPERATION_ID,
      (mock: MockTransport) =>
        executeGetSupplyOrderDetails(mock, { order_id: 1 }),
      { supplies: [{ supply_state: "UNKNOWN" }] },
    ],
  ] as const)(
    "rejects malformed %s responses",
    async (operationId, run, body) => {
      await expect(run(transport(body))).rejects.toMatchObject({ operationId });
    },
  );
});
