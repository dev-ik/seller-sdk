import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeAcceptSupplyOrderAct,
  ACCEPT_SUPPLY_ORDER_ACT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/act/accept/execute.js";
import {
  executeGetSupplyOrderActAcceptanceStatus,
  GET_SUPPLY_ORDER_ACT_ACCEPTANCE_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/act/get-accept-status/execute.js";
import {
  executeGetSupplyOrderActProducts,
  GET_SUPPLY_ORDER_ACT_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/act/get-products/execute.js";
import {
  executeGetSupplyOrderActSummary,
  GET_SUPPLY_ORDER_ACT_SUMMARY_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-order/act/get-summary/execute.js";
async function f(name: string): Promise<unknown> {
  return JSON.parse(
    await readFile(
      new URL(`../../fixtures/ozon/${name}`, import.meta.url),
      "utf8",
    ),
  ) as unknown;
}
function t(body: unknown) {
  const x = new MockTransport();
  x.enqueueResponse({ status: 200, headers: new Headers(), body });
  return x;
}
describe("SupplyOrderAPI", () => {
  it("accepts act without retry", async () => {
    const x = t({ operation_id: "TEST-OP", error_reasons: [] });
    await executeAcceptSupplyOrderAct(x, { act_id: 1 });
    expect(x.requests[0]).toMatchObject({
      operationId: ACCEPT_SUPPLY_ORDER_ACT_OPERATION_ID,
      path: "/v1/supply-order/act/accept",
      retrySafety: "unsafe",
    });
  });
  it("gets status safely", async () => {
    const x = t({ status: "IN_PROGRESS" });
    await executeGetSupplyOrderActAcceptanceStatus(x, {
      operation_id: "TEST-OP",
    });
    expect(x.requests[0]).toMatchObject({
      operationId: GET_SUPPLY_ORDER_ACT_ACCEPTANCE_STATUS_OPERATION_ID,
      path: "/v1/supply-order/act/accept/status",
      retrySafety: "safe",
    });
  });
  it("validates enum", async () => {
    await expect(
      executeGetSupplyOrderActAcceptanceStatus(t({ status: "UNKNOWN" }), {
        operation_id: "TEST",
      }),
    ).rejects.toMatchObject({
      operationId: GET_SUPPLY_ORDER_ACT_ACCEPTANCE_STATUS_OPERATION_ID,
    });
  });
  it("gets act summary safely", async () => {
    const transport = t(await f("get-supply-order-act-summary.success.json"));
    const result = await executeGetSupplyOrderActSummary(transport, {
      order_id: 100000001,
    });

    expect(transport.requests[0]).toMatchObject({
      operationId: GET_SUPPLY_ORDER_ACT_SUMMARY_OPERATION_ID,
      method: "POST",
      path: "/v1/supply-order/act/summary/get",
      body: { order_id: 100000001 },
      retrySafety: "safe",
    });
    expect(result.supplies_acts?.[0]?.supply_acts?.[0]?.act_state).toBe(
      "AWAITING_APPROVAL_BY_SELLER",
    );
  });
  it("validates act summary enum", async () => {
    await expect(
      executeGetSupplyOrderActSummary(
        t(await f("get-supply-order-act-summary.malformed.json")),
        { order_id: 100000001 },
      ),
    ).rejects.toMatchObject({
      operationId: GET_SUPPLY_ORDER_ACT_SUMMARY_OPERATION_ID,
    });
  });
  it("gets act products safely", async () => {
    const transport = t(await f("get-supply-order-act-products.success.json"));
    const result = await executeGetSupplyOrderActProducts(transport, {
      supply_id: 100000001,
    });

    expect(transport.requests[0]).toMatchObject({
      operationId: GET_SUPPLY_ORDER_ACT_PRODUCTS_OPERATION_ID,
      method: "POST",
      path: "/v1/supply-order/act/product/get",
      body: { supply_id: 100000001 },
      retrySafety: "safe",
    });
    expect(result.supply_acts?.[0]?.items?.[0]?.sku_info?.vat).toBe(20);
  });
  it("validates act product enum", async () => {
    await expect(
      executeGetSupplyOrderActProducts(
        t(await f("get-supply-order-act-products.malformed.json")),
        { supply_id: 100000001 },
      ),
    ).rejects.toMatchObject({
      operationId: GET_SUPPLY_ORDER_ACT_PRODUCTS_OPERATION_ID,
    });
  });
});
