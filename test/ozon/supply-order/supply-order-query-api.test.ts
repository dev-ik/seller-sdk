import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetSupplyOrderBundle,
  GET_SUPPLY_ORDER_BUNDLE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/bundle/get/execute.js";
import {
  executeGetSupplyOrdersV3,
  GET_SUPPLY_ORDERS_V3_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/get/v3/execute.js";
import {
  executeListSupplyOrdersV3,
  LIST_SUPPLY_ORDERS_V3_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/list/v3/execute.js";
import {
  executeCountSupplyOrdersByStatus,
  COUNT_SUPPLY_ORDERS_BY_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/status/count/execute.js";
import {
  executeListSupplyOrderTimeslotsV1,
  LIST_SUPPLY_ORDER_TIMESLOTS_V1_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/timeslot/list/v1/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Supply order query API", () => {
  it("counts supply orders by status", async () => {
    const mock = transport({
      items: [{ count: 2, order_state: "ORDER_STATE_DATA_FILLING" }],
    });
    const response = await executeCountSupplyOrdersByStatus(mock);
    expect(mock.requests[0]).toMatchObject({
      operationId: COUNT_SUPPLY_ORDERS_BY_STATUS_OPERATION_ID,
      method: "POST",
      path: "/v1/supply-order/status/counter",
      retrySafety: "safe",
    });
    expect(response.items?.[0]?.count).toBe(2);
  });

  it("gets bundle items with last-id pagination", async () => {
    const input = { bundle_ids: ["test-bundle"], limit: 100 };
    const mock = transport({
      items: [
        {
          sku: 100000001,
          name: "Synthetic product",
          placement_zone: "PRODUCTS",
          shipment_type: "BUNDLE_ITEM_SHIPMENT_TYPE_BOX",
          tags: ["MARKING_POSSIBLE"],
        },
      ],
      has_next: true,
      last_id: "test-next-id",
      total_count: 1,
    });
    const response = await executeGetSupplyOrderBundle(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: GET_SUPPLY_ORDER_BUNDLE_OPERATION_ID,
      path: "/v1/supply-order/bundle",
      body: input,
      retrySafety: "safe",
    });
    expect(response.last_id).toBe("test-next-id");
  });

  it("lists supply orders v3", async () => {
    const input = {
      filter: { states: ["DATA_FILLING"] as const },
      limit: 100,
      sort_by: "ORDER_CREATION" as const,
    };
    const mock = transport({
      last_id: "test-last-id",
      order_ids: ["100000001"],
    });
    const response = await executeListSupplyOrdersV3(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_SUPPLY_ORDERS_V3_OPERATION_ID,
      path: "/v3/supply-order/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.order_ids).toEqual(["100000001"]);
  });

  it("gets supply orders v3", async () => {
    const input = { order_ids: ["100000001"] };
    const mock = transport({
      orders: [
        {
          created_date: "2026-08-01T00:00:00Z",
          order_id: 100000001,
          state: "IN_TRANSIT",
          supplies: [
            {
              supply_id: 200000001,
              state: "IN_TRANSIT",
              storage_warehouse: { warehouse_id: 300000001 },
            },
          ],
        },
      ],
    });
    const response = await executeGetSupplyOrdersV3(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: GET_SUPPLY_ORDERS_V3_OPERATION_ID,
      path: "/v3/supply-order/get",
      body: input,
      retrySafety: "safe",
    });
    expect(response.orders?.[0]?.state).toBe("IN_TRANSIT");
  });

  it("lists legacy supply-order timeslots", async () => {
    const input = { supply_order_id: 100000001 };
    const mock = transport({
      timeslots: [{ from: "2026-08-20T10:00:00Z", to: "2026-08-20T11:00:00Z" }],
      timezone: [{ iana_name: "Asia/Yekaterinburg", offset: "+05:00" }],
    });
    const response = await executeListSupplyOrderTimeslotsV1(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_SUPPLY_ORDER_TIMESLOTS_V1_OPERATION_ID,
      path: "/v1/supply-order/timeslot/get",
      body: input,
      retrySafety: "safe",
    });
    expect(response.timezone?.[0]?.offset).toBe("+05:00");
  });

  it.each([
    [
      COUNT_SUPPLY_ORDERS_BY_STATUS_OPERATION_ID,
      (mock: MockTransport) => executeCountSupplyOrdersByStatus(mock),
      { items: [{ order_state: "UNKNOWN" }] },
    ],
    [
      GET_SUPPLY_ORDER_BUNDLE_OPERATION_ID,
      (mock: MockTransport) =>
        executeGetSupplyOrderBundle(mock, { bundle_ids: ["test"], limit: 1 }),
      { items: [{ placement_zone: "UNKNOWN" }] },
    ],
    [
      LIST_SUPPLY_ORDERS_V3_OPERATION_ID,
      (mock: MockTransport) =>
        executeListSupplyOrdersV3(mock, {
          filter: { states: ["DATA_FILLING"] },
          limit: 1,
          sort_by: "ORDER_CREATION",
        }),
      { order_ids: [1] },
    ],
    [
      GET_SUPPLY_ORDERS_V3_OPERATION_ID,
      (mock: MockTransport) =>
        executeGetSupplyOrdersV3(mock, { order_ids: ["1"] }),
      { orders: [{ state: "UNKNOWN" }] },
    ],
    [
      LIST_SUPPLY_ORDER_TIMESLOTS_V1_OPERATION_ID,
      (mock: MockTransport) =>
        executeListSupplyOrderTimeslotsV1(mock, { supply_order_id: 1 }),
      { timeslots: [{ to: "2026-08-20T11:00:00Z" }] },
    ],
  ] as const)(
    "rejects malformed %s responses",
    async (operationId, run, body) => {
      await expect(run(transport(body))).rejects.toMatchObject({ operationId });
    },
  );
});
