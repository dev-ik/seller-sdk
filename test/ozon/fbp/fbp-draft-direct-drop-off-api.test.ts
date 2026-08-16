import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeDeleteFbpDirectDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/direct/delete/v1/execute.js";
import { executeValidateFbpDirectDraftProductsV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/direct/product/validate/v1/execute.js";
import { executeRegisterFbpDirectDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/direct/register/v1/execute.js";
import { executeCreateFbpDropOffDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/drop-off/create/v1/execute.js";
import { executeDeleteFbpDropOffDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/drop-off/delete/v1/execute.js";
import { executeEditFbpDropOffDeliveryV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/drop-off/delivery/edit/v1/execute.js";
import { executeListFbpDropOffPointsV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/drop-off/point/list/v1/execute.js";
import { executeGetFbpDropOffPointTimetableV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/drop-off/point/timetable/v1/execute.js";
import { executeListFbpDropOffProvincesV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/drop-off/province/list/v1/execute.js";
import { executeRegisterFbpDropOffDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/drop-off/register/v1/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Ozon direct and drop-off FBP drafts", () => {
  it("maps all ten operations and retry policies", async () => {
    const calls: Array<[MockTransport, string, "safe" | "unsafe"]> = [];

    const directDelete = transport({
      cancellation_state: { cancellation_status: "CANCELED" },
      row_version: 2,
    });
    await executeDeleteFbpDirectDraftV1(directDelete, { supply_id: "s1" });
    calls.push([directDelete, "/v1/fbp/draft/direct/delete", "unsafe"]);

    const productValidation = transport({
      approved_items: [{ quantity: 2, sku: 101 }],
      bundle_generated: true,
      bundle_id: "b1",
    });
    await executeValidateFbpDirectDraftProductsV1(productValidation, {
      skus: [{ count: 2, sku: 101 }],
      warehouse_id: 3,
    });
    calls.push([
      productValidation,
      "/v1/fbp/draft/direct/product/validate",
      "safe",
    ]);

    const directRegister = transport({ is_error: false, row_version: 3 });
    await executeRegisterFbpDirectDraftV1(directRegister, {
      row_version: 2,
      supply_id: "s1",
    });
    calls.push([directRegister, "/v1/fbp/draft/direct/registrate", "unsafe"]);

    const dropOffCreate = transport({
      draft_id: 4,
      row_version: 1,
      supply_id: "s2",
    });
    await executeCreateFbpDropOffDraftV1(dropOffCreate, {
      bundle_id: "b2",
      delivery_details: {
        drop_off_date: "2026-09-01",
        drop_off_point_id: 5,
        drop_off_province_uuid: "p1",
      },
      package_units_count: 2,
      warehouse_id: 3,
    });
    calls.push([dropOffCreate, "/v1/fbp/draft/drop-off/create", "unsafe"]);

    const dropOffDelete = transport({ row_version: 2 });
    await executeDeleteFbpDropOffDraftV1(dropOffDelete, { supply_id: "s2" });
    calls.push([dropOffDelete, "/v1/fbp/draft/drop-off/delete", "unsafe"]);

    const deliveryEdit = transport({ row_version: 3 });
    await executeEditFbpDropOffDeliveryV1(deliveryEdit, {
      drop_off_date: "2026-09-02",
      drop_off_point_id: 6,
      drop_off_province_uuid: "p1",
      row_version: 2,
      supply_id: "s2",
    });
    calls.push([deliveryEdit, "/v1/fbp/draft/drop-off/dlv/edit", "unsafe"]);

    const dropOffRegister = transport({ is_error: false, row_version: 4 });
    await executeRegisterFbpDropOffDraftV1(dropOffRegister, {
      row_version: 3,
      supply_id: "s2",
    });
    calls.push([
      dropOffRegister,
      "/v1/fbp/draft/drop-off/registrate",
      "unsafe",
    ]);

    const provinces = transport({
      provinces: [{ name: "Province", points_count: 1, province_uuid: "p1" }],
    });
    await executeListFbpDropOffProvincesV1(provinces, { warehouse_id: 3 });
    calls.push([provinces, "/v1/fbp/draft/drop-off/province/list", "safe"]);

    const points = transport({
      drop_off_points: [
        {
          drop_off_point_id: 6,
          nearest_drop_off_date: "2026-09-02T00:00:00Z",
          province_uuid: "p1",
        },
      ],
    });
    await executeListFbpDropOffPointsV1(points, {
      page_size: 50,
      province_uuid: "p1",
      warehouse_id: 3,
    });
    calls.push([points, "/v1/fbp/draft/drop-off/point/list", "safe"]);

    const timetable = transport({
      calendar: [
        {
          calendar_item: {
            is_holiday: false,
            opening_hours: {
              timeslot_end: "18:00",
              timeslot_start: "09:00",
            },
          },
          day_of_week: "MONDAY",
        },
      ],
    });
    await executeGetFbpDropOffPointTimetableV1(timetable, {
      drop_off_point_id: 6,
      province_uuid: "p1",
      warehouse_id: 3,
    });
    calls.push([timetable, "/v1/fbp/draft/drop-off/point/timetable", "safe"]);

    for (const [mock, path, retrySafety] of calls) {
      expect(mock.requests[0]).toMatchObject({
        method: "POST",
        path,
        retrySafety,
      });
    }
  });

  it("rejects an undocumented nested weekday enum value", async () => {
    await expect(
      executeGetFbpDropOffPointTimetableV1(
        transport({ calendar: [{ day_of_week: "FUNDAY" }] }),
        {
          drop_off_point_id: 6,
          province_uuid: "p1",
          warehouse_id: 3,
        },
      ),
    ).rejects.toMatchObject({
      operationId: "FbpDraftDropOffPointTimetable",
    });
  });
});
