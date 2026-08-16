import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeListFbpArchiveSuppliesV1 } from "../../../packages/ozon/src/endpoints/fbp/archive/list/v1/execute.js";
import { executeGetFbpDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/get/v1/execute.js";
import { executeCreateFbpPickupDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/pick-up/create/v1/execute.js";
import { executeDeleteFbpPickupDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/pick-up/delete/v1/execute.js";
import { executeEditFbpPickupDraftDeliveryV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/pick-up/delivery/edit/v1/execute.js";
import { executeValidateFbpPickupDraftProductsV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/pick-up/product/validate/v1/execute.js";
import { executeRegisterFbpPickupDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/pick-up/register/v1/execute.js";
import { executeCreateFbpLabelsV1 } from "../../../packages/ozon/src/endpoints/fbp/label/create/v1/execute.js";
import { executeGetFbpLabelsV1 } from "../../../packages/ozon/src/endpoints/fbp/label/get/v1/execute.js";
import { executeListFbpWarehousesV1 } from "../../../packages/ozon/src/endpoints/fbp/warehouse/list/v1/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Ozon FBP archive, labels, and pick-up drafts", () => {
  it("maps all ten operations and retry policies", async () => {
    const calls: Array<[MockTransport, string, "safe" | "unsafe"]> = [];
    const start = "2026-09-01T10:00:00Z";

    const archive = transport({
      has_next: false,
      items: [{ created_date: start, status: "COMPLETED", supply_id: "s1" }],
      last_id: 1,
    });
    await executeListFbpArchiveSuppliesV1(archive, { count: "50" });
    calls.push([archive, "/v1/fbp/archive/list", "safe"]);

    const createLabels = transport({ code: "l1" });
    await executeCreateFbpLabelsV1(createLabels, { supply_id: "s1" });
    calls.push([createLabels, "/v1/fbp/label/create", "unsafe"]);

    const getLabels = transport({
      label_url: "https://example.test/labels.pdf",
      state: "FINISHED",
    });
    await executeGetFbpLabelsV1(getLabels, { code: "l1", supply_id: "s1" });
    calls.push([getLabels, "/v1/fbp/label/get", "safe"]);

    const pickupDetails = {
      address: "Warehouse street, 1",
      comment: "Gate 2",
      date: start,
      sender_name: "Ivan",
      sender_phone: "+70000000000",
    };
    const createPickup = transport({
      draft_id: 2,
      row_version: 1,
      supply_id: "s2",
    });
    await executeCreateFbpPickupDraftV1(createPickup, {
      bundle_id: "b1",
      delivery_details: pickupDetails,
      package_units_count: 2,
      warehouse_id: 3,
    });
    calls.push([createPickup, "/v1/fbp/draft/pick-up/create", "unsafe"]);

    const deletePickup = transport({ row_version: 2 });
    await executeDeleteFbpPickupDraftV1(deletePickup, { supply_id: "s2" });
    calls.push([deletePickup, "/v1/fbp/draft/pick-up/delete", "unsafe"]);

    const editPickup = transport({ row_version: 3 });
    await executeEditFbpPickupDraftDeliveryV1(editPickup, {
      pickup_details: pickupDetails,
      row_version: 2,
      supply_id: "s2",
    });
    calls.push([editPickup, "/v1/fbp/draft/pick-up/dlv/edit", "unsafe"]);

    const validatePickup = transport({
      approved_items: [{ quantity: 1, sku: 101 }],
      bundle_generated: true,
      bundle_id: "b1",
    });
    await executeValidateFbpPickupDraftProductsV1(validatePickup, {
      skus: [{ count: 1, sku: 101 }],
      warehouse_id: 3,
    });
    calls.push([
      validatePickup,
      "/v1/fbp/draft/pick-up/product/validate",
      "safe",
    ]);

    const warehouses = transport({
      warehouses: [
        {
          address_detailing: { city: "City", country: "Country" },
          id: 3,
          is_bonded: false,
          supply_types: [1, 2],
        },
      ],
    });
    await executeListFbpWarehousesV1(warehouses);
    calls.push([warehouses, "/v1/fbp/warehouse/list", "safe"]);

    const registerPickup = transport({ is_error: false, row_version: 4 });
    await executeRegisterFbpPickupDraftV1(registerPickup, {
      row_version: 3,
      supply_id: "s2",
    });
    calls.push([registerPickup, "/v1/fbp/draft/pick-up/registrate", "unsafe"]);

    const draft = transport({
      created_at: start,
      delivery_details: {
        pickup_details: pickupDetails,
        supply_type: "PICK_UP",
      },
      editable: true,
      status: "NEW",
      supply_id: "s2",
    });
    await executeGetFbpDraftV1(draft, { supply_id: "s2" });
    calls.push([draft, "/v1/fbp/draft/get", "safe"]);

    for (const [mock, path, retrySafety] of calls) {
      expect(mock.requests[0]).toMatchObject({
        method: "POST",
        path,
        retrySafety,
      });
    }
  });

  it("rejects an undocumented nested draft status", async () => {
    await expect(
      executeGetFbpDraftV1(transport({ status: "LOST" }), {
        supply_id: "s2",
      }),
    ).rejects.toMatchObject({ operationId: "FbpAPI_FbpDraftGet" });
  });
});
