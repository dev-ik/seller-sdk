import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeCancelSupplyOrder,
  CANCEL_SUPPLY_ORDER_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/cancel/create/v1/execute.js";
import {
  executeGetSupplyOrderCancelStatus,
  GET_SUPPLY_ORDER_CANCEL_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/cancel/status/v1/execute.js";
import {
  executeUpdateSupplyOrderContent,
  UPDATE_SUPPLY_ORDER_CONTENT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/content/update/v1/execute.js";
import {
  executeGetSupplyOrderContentUpdateStatus,
  GET_SUPPLY_ORDER_CONTENT_UPDATE_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/content/status/v1/execute.js";
import {
  executeValidateSupplyOrderContent,
  VALIDATE_SUPPLY_ORDER_CONTENT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/content/validate/v1/execute.js";
function t(body: unknown) {
  const x = new MockTransport();
  x.enqueueResponse({ status: 200, headers: new Headers(), body });
  return x;
}
describe("Supply order cancellation and content API", () => {
  it("cancels an order without retries", async () => {
    const input = { order_id: 1 };
    const x = t({ operation_id: "op" });
    await executeCancelSupplyOrder(x, input);
    expect(x.requests[0]).toMatchObject({
      path: "/v1/supply-order/cancel",
      body: input,
      retrySafety: "unsafe",
    });
  });
  it("gets cancellation status", async () => {
    const input = { operation_id: "op" };
    const x = t({
      status: "SUCCESS",
      result: {
        is_order_cancelled: true,
        supplies: [{ supply_id: 2, is_supply_cancelled: true }],
      },
    });
    await executeGetSupplyOrderCancelStatus(x, input);
    expect(x.requests[0]).toMatchObject({
      path: "/v1/supply-order/cancel/status",
      body: input,
      retrySafety: "safe",
    });
  });
  it("updates content without retries", async () => {
    const input = {
      order_id: 1,
      supply_id: 2,
      items: [{ quant: 1, quantity: 2, sku: 3 }],
    };
    const x = t({ operation_id: "op", errors: [] });
    await executeUpdateSupplyOrderContent(x, input);
    expect(x.requests[0]).toMatchObject({
      path: "/v1/supply-order/content/update",
      body: input,
      retrySafety: "unsafe",
    });
  });
  it("gets content update status", async () => {
    const x = t({ status: "SUCCESS", new_bundle_id: "bundle", errors: [] });
    await executeGetSupplyOrderContentUpdateStatus(x, { operation_id: "op" });
    expect(x.requests[0]).toMatchObject({
      path: "/v1/supply-order/content/update/status",
      retrySafety: "safe",
    });
  });
  it("validates content", async () => {
    const input = { new_bundle_id: "bundle", supply_id: 2 };
    const x = t({
      editing_errors: [],
      validated_assortment: {
        approved_items: [{ sku: 3, quantity: 2 }],
        total_approved_item_count: 1,
      },
    });
    await executeValidateSupplyOrderContent(x, input);
    expect(x.requests[0]).toMatchObject({
      path: "/v1/supply-order/content/update/validation",
      body: input,
      retrySafety: "safe",
    });
  });
  it.each([
    [
      CANCEL_SUPPLY_ORDER_OPERATION_ID,
      (x: MockTransport) => executeCancelSupplyOrder(x, { order_id: 1 }),
      { operation_id: 1 },
    ],
    [
      GET_SUPPLY_ORDER_CANCEL_STATUS_OPERATION_ID,
      (x: MockTransport) =>
        executeGetSupplyOrderCancelStatus(x, { operation_id: "op" }),
      { status: "UNKNOWN" },
    ],
    [
      UPDATE_SUPPLY_ORDER_CONTENT_OPERATION_ID,
      (x: MockTransport) =>
        executeUpdateSupplyOrderContent(x, {
          order_id: 1,
          supply_id: 2,
          items: [],
        }),
      { errors: ["UNKNOWN"] },
    ],
    [
      GET_SUPPLY_ORDER_CONTENT_UPDATE_STATUS_OPERATION_ID,
      (x: MockTransport) =>
        executeGetSupplyOrderContentUpdateStatus(x, { operation_id: "op" }),
      { status: "UNKNOWN" },
    ],
    [
      VALIDATE_SUPPLY_ORDER_CONTENT_OPERATION_ID,
      (x: MockTransport) =>
        executeValidateSupplyOrderContent(x, {
          new_bundle_id: "b",
          supply_id: 1,
        }),
      { editing_errors: ["BAD"] },
    ],
  ] as const)("rejects malformed %s", async (operationId, run, body) => {
    await expect(run(t(body))).rejects.toMatchObject({ operationId });
  });
});
