import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeGetSupplyCargoesV1 } from "../../../packages/ozon/src/endpoints/cargoes/supplies/get/v1/execute.js";
import { executeCreateTransportLabelsByOrderV1 } from "../../../packages/ozon/src/endpoints/cargoes/label/transport-by-order/create/v1/execute.js";
import { executeGetTransportLabelsByOrderStatusV1 } from "../../../packages/ozon/src/endpoints/cargoes/label/transport-by-order/status/v1/execute.js";
import { executeCreateTransportLabelsV1 } from "../../../packages/ozon/src/endpoints/cargoes/label/transport/create/v1/execute.js";
import { executeGetTransportLabelsStatusV1 } from "../../../packages/ozon/src/endpoints/cargoes/label/transport/status/v1/execute.js";
import { executeCreateFbpDirectSellerDeliveryDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/direct/seller-delivery/create/v1/execute.js";
import { executeEditFbpDirectSellerDeliveryDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/direct/seller-delivery/edit/v1/execute.js";
import { executeEditFbpDirectTimeslotV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/direct/timeslot/edit/v1/execute.js";
import { executeGetFbpDirectTimeslotsV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/direct/timeslot/get/v1/execute.js";
import { executeCreateFbpDirectDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/direct/create/v1/execute.js";
function t(body: unknown) {
  const x = new MockTransport();
  x.enqueueResponse({ status: 200, headers: new Headers(), body });
  return x;
}
describe("Ozon cargo labels and direct FBP drafts", () => {
  it("maps all ten operations", async () => {
    const calls: Array<[MockTransport, string, string]> = [];
    const get = t({
      supplies_cargoes: [
        { supply_id: 1, transport_cargoes: [{ type: "PALLET" }] },
      ],
    });
    await executeGetSupplyCargoesV1(get, { supply_ids: ["1"] });
    calls.push([get, "/v1/cargoes/supplies/get", "safe"]);
    const byOrder = t({ operation_id: "op1" });
    await executeCreateTransportLabelsByOrderV1(byOrder, { order_id: 1 });
    calls.push([
      byOrder,
      "/v1/cargoes/label/transport-by-order/create",
      "unsafe",
    ]);
    const byOrderStatus = t({
      result: { file_url: "https://example.test/a.pdf" },
      status: "SUCCESS",
    });
    await executeGetTransportLabelsByOrderStatusV1(byOrderStatus, {
      operation_id: "op1",
    });
    calls.push([
      byOrderStatus,
      "/v1/cargoes/label/transport-by-order/status",
      "safe",
    ]);
    const labels = t({ operation_id: "op2" });
    await executeCreateTransportLabelsV1(labels, {
      supply_id: 1,
      transport_cargo_ids: ["2"],
    });
    calls.push([labels, "/v1/cargoes/label/transport/create", "unsafe"]);
    const labelStatus = t({
      result: { file_url: "https://example.test/b.pdf" },
      status: "SUCCESS",
    });
    await executeGetTransportLabelsStatusV1(labelStatus, {
      operation_id: "op2",
    });
    calls.push([labelStatus, "/v1/cargoes/label/transport/status", "safe"]);
    const start = "2026-09-01T10:00:00Z";
    const createSeller = t({ draft_id: 1, row_version: 1, supply_id: "s1" });
    await executeCreateFbpDirectSellerDeliveryDraftV1(createSeller, {
      bundle_id: "b1",
      delivery_details: {
        driver_name: "Ivan",
        timeslot_start: start,
        vehicle_number: "A001AA",
        vehicle_type: "Van",
      },
      package_units_count: 1,
      warehouse_id: 2,
    });
    calls.push([
      createSeller,
      "/v1/fbp/draft/direct/seller-dlv/create",
      "unsafe",
    ]);
    const edit = t({ is_error: false, row_version: 2 });
    await executeEditFbpDirectSellerDeliveryDraftV1(edit, {
      driver_name: "Ivan",
      row_version: 1,
      supply_id: "s1",
      vehicle_number: "A001AA",
      vehicle_type: "Van",
    });
    calls.push([edit, "/v1/fbp/draft/direct/seller-dlv/edit", "unsafe"]);
    const editTime = t({ row_version: 3 });
    await executeEditFbpDirectTimeslotV1(editTime, {
      row_version: 2,
      supply_id: "s1",
      timeslot_start: start,
    });
    calls.push([editTime, "/v1/fbp/draft/direct/timeslot/edit", "unsafe"]);
    const times = t({
      timeslots: [
        { timeslot_start: start, timeslot_end: "2026-09-01T11:00:00Z" },
      ],
    });
    await executeGetFbpDirectTimeslotsV1(times, {
      bundle_id: "b1",
      interval_end: "2026-09-02T00:00:00Z",
      interval_start: start,
      warehouse_id: 2,
    });
    calls.push([times, "/v1/fbp/draft/direct/timeslot/get", "safe"]);
    const create = t({ draft_id: 2, row_version: 1, supply_id: "s2" });
    await executeCreateFbpDirectDraftV1(create, {
      bundle_id: "b1",
      delivery_details: { timeslot_start: start },
      package_units_count: 1,
      warehouse_id: 2,
    });
    calls.push([create, "/v1/fbp/draft/direct/create", "unsafe"]);
    for (const [transport, path, retrySafety] of calls)
      expect(transport.requests[0]).toMatchObject({ path, retrySafety });
  });
  it("rejects an invalid nested label status", async () => {
    await expect(
      executeGetTransportLabelsByOrderStatusV1(t({ status: "UNKNOWN" }), {
        operation_id: "op",
      }),
    ).rejects.toMatchObject({
      operationId: "CargoesLabelTransportByOrderStatus",
    });
  });
});
