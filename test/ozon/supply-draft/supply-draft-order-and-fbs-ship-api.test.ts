import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeCreateSupplyOrderFromDraft,
  CREATE_SUPPLY_ORDER_FROM_DRAFT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/supply/create/v2/execute.js";
import {
  executeGetSupplyOrderFromDraftStatus,
  GET_SUPPLY_ORDER_FROM_DRAFT_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/supply/status/v2/execute.js";
import {
  executeListFboSellerWarehouses,
  LIST_FBO_SELLER_WAREHOUSES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/fbo/seller/list/v1/execute.js";
import {
  executeShipFbsPostingV4,
  SHIP_FBS_POSTING_V4_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/ship/v4/execute.js";
function t(body: unknown) {
  const x = new MockTransport();
  x.enqueueResponse({ status: 200, headers: new Headers(), body });
  return x;
}
const createInput = {
  draft_id: 1,
  selected_cluster_warehouses: [
    { macrolocal_cluster_id: 2, storage_warehouse_id: 3 },
  ],
  supply_type: "DIRECT" as const,
};
describe("Supply draft order and FBS ship API", () => {
  it("creates an order from draft without retries", async () => {
    const x = t({ draft_id: 1, error_reasons: [] });
    await executeCreateSupplyOrderFromDraft(x, createInput);
    expect(x.requests[0]).toMatchObject({
      path: "/v2/draft/supply/create",
      body: createInput,
      retrySafety: "unsafe",
    });
  });
  it("gets order creation status", async () => {
    const x = t({ status: "SUCCESS", order_id: 4, error_reasons: [] });
    await executeGetSupplyOrderFromDraftStatus(x, { draft_id: 1 });
    expect(x.requests[0]).toMatchObject({
      path: "/v2/draft/supply/create/status",
      retrySafety: "safe",
    });
  });
  it("lists FBO seller warehouses", async () => {
    const x = t({
      warehouses: [
        {
          seller_warehouse_id: 1,
          is_active: true,
          address: { coordinates: { latitude: 55, longitude: 37 } },
          working_days: [{ day: "MONDAY" }],
        },
      ],
    });
    await executeListFboSellerWarehouses(x);
    expect(x.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbo/seller/list",
      retrySafety: "safe",
    });
  });
  it("ships an FBS posting without retries", async () => {
    const input = {
      posting_number: "TEST",
      packages: [{ products: [{ product_id: 1, quantity: 1 }] }],
    };
    const x = t({
      result: ["TEST"],
      additional_data: [
        { posting_number: "TEST", products: [{ sku: 1, quantity: 1 }] },
      ],
    });
    await executeShipFbsPostingV4(x, input);
    expect(x.requests[0]).toMatchObject({
      path: "/v4/posting/fbs/ship",
      body: input,
      retrySafety: "unsafe",
    });
  });
  it.each([
    [
      CREATE_SUPPLY_ORDER_FROM_DRAFT_OPERATION_ID,
      (x: MockTransport) => executeCreateSupplyOrderFromDraft(x, createInput),
      { error_reasons: ["BAD"] },
    ],
    [
      GET_SUPPLY_ORDER_FROM_DRAFT_STATUS_OPERATION_ID,
      (x: MockTransport) =>
        executeGetSupplyOrderFromDraftStatus(x, { draft_id: 1 }),
      { status: "BAD" },
    ],
    [
      LIST_FBO_SELLER_WAREHOUSES_OPERATION_ID,
      (x: MockTransport) => executeListFboSellerWarehouses(x),
      { warehouses: [{ working_days: [{ day: "BAD" }] }] },
    ],
    [
      SHIP_FBS_POSTING_V4_OPERATION_ID,
      (x: MockTransport) =>
        executeShipFbsPostingV4(x, { posting_number: "TEST", packages: [] }),
      { result: [1] },
    ],
  ] as const)("rejects malformed %s", async (operationId, run, body) => {
    await expect(run(t(body))).rejects.toMatchObject({ operationId });
  });
});
