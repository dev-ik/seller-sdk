import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeCreateFbpAcceptanceActV1 } from "../../../packages/ozon/src/endpoints/fbp/act/from/create/v1/execute.js";
import { executeGetFbpAcceptanceActV1 } from "../../../packages/ozon/src/endpoints/fbp/act/from/get/v1/execute.js";
import { executeCreateFbpConsignmentNoteV1 } from "../../../packages/ozon/src/endpoints/fbp/act/to/create/v1/execute.js";
import { executeGetFbpConsignmentNoteV1 } from "../../../packages/ozon/src/endpoints/fbp/act/to/get/v1/execute.js";
import { executeGetFbpArchiveSupplyV1 } from "../../../packages/ozon/src/endpoints/fbp/archive/get/v1/execute.js";
import { executeValidateFbpDropOffDraftProductsV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/drop-off/product/validate/v1/execute.js";
import { executeCancelFbpDirectOrderV1 } from "../../../packages/ozon/src/endpoints/fbp/order/direct/cancel/v1/execute.js";
import { executeEditFbpDirectOrderSellerDeliveryV1 } from "../../../packages/ozon/src/endpoints/fbp/order/direct/seller-delivery/edit/v1/execute.js";
import { executeEditFbpDirectOrderTimeslotV1 } from "../../../packages/ozon/src/endpoints/fbp/order/direct/timeslot/edit/v1/execute.js";
import { executeListFbpDirectOrderTimeslotsV1 } from "../../../packages/ozon/src/endpoints/fbp/order/direct/timeslot/list/v1/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Ozon FBP orders, documents, and archive", () => {
  it("maps all ten operations and retry policies", async () => {
    const calls: Array<[MockTransport, string, "safe" | "unsafe"]> = [];

    const validation = transport({
      bundle_generated: false,
      rejected_items: [
        { rejection_reasons: ["INCOMPATIBLE_WAREHOUSE"], sku: 101 },
      ],
    });
    await executeValidateFbpDropOffDraftProductsV1(validation, {
      skus: [{ count: 1, sku: 101 }],
      warehouse_id: 2,
    });
    calls.push([validation, "/v1/fbp/draft/drop-off/product/validate", "safe"]);

    const cancel = transport({ is_error: false, row_version: 2 });
    await executeCancelFbpDirectOrderV1(cancel, { supply_id: "s1" });
    calls.push([cancel, "/v1/fbp/order/direct/cancel", "unsafe"]);

    const delivery = transport({ is_error: false, row_version: 3 });
    await executeEditFbpDirectOrderSellerDeliveryV1(delivery, {
      driver_name: "Ivan",
      row_version: 2,
      supply_id: "s1",
      vehicle_number: "A001AA",
      vehicle_type: "Van",
    });
    calls.push([delivery, "/v1/fbp/order/direct/seller-dlv/edit", "unsafe"]);

    const start = "2026-09-01T10:00:00Z";
    const editTimeslot = transport({ row_version: 4 });
    await executeEditFbpDirectOrderTimeslotV1(editTimeslot, {
      row_version: 3,
      supply_id: "s1",
      timeslot_start: start,
    });
    calls.push([editTimeslot, "/v1/fbp/order/direct/timeslot/edit", "unsafe"]);

    const timeslots = transport({
      timeslots: [
        { timeslot_end: "2026-09-01T11:00:00Z", timeslot_start: start },
      ],
      warehouse_timezone_name: "Asia/Yekaterinburg",
    });
    await executeListFbpDirectOrderTimeslotsV1(timeslots, {
      interval_end: "2026-09-02T00:00:00Z",
      interval_start: start,
      supply_id: "s1",
    });
    calls.push([timeslots, "/v1/fbp/order/direct/timeslot/list", "safe"]);

    const createAct = transport({ file_uuid: "f1", is_success: true });
    await executeCreateFbpAcceptanceActV1(createAct, { supply_id: "s1" });
    calls.push([createAct, "/v1/fbp/act-from/create", "unsafe"]);

    const getAct = transport({
      cdn_url: "https://example.test/act.pdf",
      status: "EXIST",
    });
    await executeGetFbpAcceptanceActV1(getAct, { file_uuid: "f1" });
    calls.push([getAct, "/v1/fbp/act-from/get", "safe"]);

    const createNote = transport({ code: "n1" });
    await executeCreateFbpConsignmentNoteV1(createNote, { supply_id: "s1" });
    calls.push([createNote, "/v1/fbp/act-to/create", "unsafe"]);

    const getNote = transport({
      label_url: "https://example.test/note.pdf",
      state: "FINISHED",
    });
    await executeGetFbpConsignmentNoteV1(getNote, {
      code: "n1",
      supply_id: "s1",
    });
    calls.push([getNote, "/v1/fbp/act-to/get", "safe"]);

    const archive = transport({
      created_date: start,
      delivery_details: {
        direct_details: {
          by_seller_details: { driver_name: "Ivan" },
          timeslot_details: {
            timeslot: {
              timeslot_end: "2026-09-01T11:00:00Z",
              timeslot_start: start,
            },
          },
        },
        supply_type: "DIRECT_BY_SELLER",
      },
      status: "COMPLETED",
      supply_id: "s1",
    });
    await executeGetFbpArchiveSupplyV1(archive, { supply_id: "s1" });
    calls.push([archive, "/v1/fbp/archive/get", "safe"]);

    for (const [mock, path, retrySafety] of calls) {
      expect(mock.requests[0]).toMatchObject({
        method: "POST",
        path,
        retrySafety,
      });
    }
  });

  it("rejects an undocumented nested archive supply type", async () => {
    await expect(
      executeGetFbpArchiveSupplyV1(
        transport({ delivery_details: { supply_type: "TELEPORT" } }),
        { supply_id: "s1" },
      ),
    ).rejects.toMatchObject({ operationId: "FbpAPI_FbpArchiveGet" });
  });
});
