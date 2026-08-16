import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeCreateSupplyOrderPass,
  CREATE_SUPPLY_ORDER_PASS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/pass/create/v1/execute.js";
import {
  executeGetSupplyOrderPassStatus,
  GET_SUPPLY_ORDER_PASS_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/pass/status/v1/execute.js";
import {
  executeListSupplyOrderTimeslotsV2,
  LIST_SUPPLY_ORDER_TIMESLOTS_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/timeslot/list/v2/execute.js";
import {
  executeGetSupplyOrderTimeslotStatus,
  GET_SUPPLY_ORDER_TIMESLOT_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/timeslot/status/v1/execute.js";
import {
  executeUpdateSupplyOrderTimeslot,
  UPDATE_SUPPLY_ORDER_TIMESLOT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/timeslot/update/v1/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Supply order timeslot and pass API", () => {
  it("lists v2 timeslots", async () => {
    const input = { order_id: 100000001 };
    const mock = transport({
      timeslots_info: {
        limitations: { changes_count: 1, changes_limit: 3 },
        timeslots: [
          { from: "2026-08-20T10:00:00Z", to: "2026-08-20T11:00:00Z" },
        ],
        timezone: { iana_name: "Asia/Yekaterinburg", offset: 18000 },
      },
    });
    const response = await executeListSupplyOrderTimeslotsV2(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_SUPPLY_ORDER_TIMESLOTS_V2_OPERATION_ID,
      path: "/v2/supply-order/timeslot/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.timeslots_info?.limitations?.changes_limit).toBe(3);
  });

  it("updates a timeslot without automatic retries", async () => {
    const input = {
      supply_order_id: 100000001,
      timeslot: {
        from: "2026-08-20T10:00:00Z",
        to: "2026-08-20T11:00:00Z",
      },
    };
    const mock = transport({ operation_id: "test-operation", errors: [] });
    const response = await executeUpdateSupplyOrderTimeslot(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_SUPPLY_ORDER_TIMESLOT_OPERATION_ID,
      path: "/v1/supply-order/timeslot/update",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.operation_id).toBe("test-operation");
  });

  it("gets timeslot update status", async () => {
    const input = { operation_id: "test-operation" };
    const mock = transport({ status: "STATUS_SUCCESS", errors: [] });
    const response = await executeGetSupplyOrderTimeslotStatus(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: GET_SUPPLY_ORDER_TIMESLOT_STATUS_OPERATION_ID,
      path: "/v1/supply-order/timeslot/status",
      body: input,
      retrySafety: "safe",
    });
    expect(response.status).toBe("STATUS_SUCCESS");
  });

  it("creates a supply-order pass without automatic retries", async () => {
    const input = {
      supply_order_id: 100000001,
      vehicle: {
        driver_name: "Synthetic Driver",
        driver_phone: "+70000000000",
        vehicle_model: "Synthetic Model",
        vehicle_number: "TEST-001",
      },
    };
    const mock = transport({
      operation_id: "test-operation",
      error_reasons: [],
    });
    const response = await executeCreateSupplyOrderPass(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: CREATE_SUPPLY_ORDER_PASS_OPERATION_ID,
      path: "/v1/supply-order/pass/create",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.operation_id).toBe("test-operation");
  });

  it("gets supply-order pass status", async () => {
    const input = { operation_id: "test-operation" };
    const mock = transport({ result: "Success", errors: [] });
    const response = await executeGetSupplyOrderPassStatus(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: GET_SUPPLY_ORDER_PASS_STATUS_OPERATION_ID,
      path: "/v1/supply-order/pass/status",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result).toBe("Success");
  });

  it.each([
    [
      LIST_SUPPLY_ORDER_TIMESLOTS_V2_OPERATION_ID,
      (mock: MockTransport) =>
        executeListSupplyOrderTimeslotsV2(mock, { order_id: 1 }),
      { timeslot_change_forbidden: { error_reasons: ["UNKNOWN"] } },
    ],
    [
      UPDATE_SUPPLY_ORDER_TIMESLOT_OPERATION_ID,
      (mock: MockTransport) =>
        executeUpdateSupplyOrderTimeslot(mock, {
          supply_order_id: 1,
          timeslot: {
            from: "2026-08-20T10:00:00Z",
            to: "2026-08-20T11:00:00Z",
          },
        }),
      { errors: ["UNKNOWN"] },
    ],
    [
      GET_SUPPLY_ORDER_TIMESLOT_STATUS_OPERATION_ID,
      (mock: MockTransport) =>
        executeGetSupplyOrderTimeslotStatus(mock, { operation_id: "test" }),
      { status: "UNKNOWN" },
    ],
    [
      CREATE_SUPPLY_ORDER_PASS_OPERATION_ID,
      (mock: MockTransport) =>
        executeCreateSupplyOrderPass(mock, {
          supply_order_id: 1,
          vehicle: {
            driver_name: "Synthetic Driver",
            driver_phone: "+70000000000",
            vehicle_model: "Synthetic Model",
            vehicle_number: "TEST-001",
          },
        }),
      { error_reasons: ["UNKNOWN"] },
    ],
    [
      GET_SUPPLY_ORDER_PASS_STATUS_OPERATION_ID,
      (mock: MockTransport) =>
        executeGetSupplyOrderPassStatus(mock, { operation_id: "test" }),
      { result: "UNKNOWN" },
    ],
  ] as const)(
    "rejects malformed %s responses",
    async (operationId, run, body) => {
      await expect(run(transport(body))).rejects.toMatchObject({ operationId });
    },
  );
});
