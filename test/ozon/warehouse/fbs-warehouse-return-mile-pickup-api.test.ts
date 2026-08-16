import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeUpdateFbsWarehouseFirstMileV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/first-mile/update/v1/execute.js";
import { executeCancelFbsPickupCourierCallV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/pickup/courier/cancel/v1/execute.js";
import { executeCreateFbsPickupCourierCallV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/pickup/courier/create/v1/execute.js";
import { executeListFbsPickupHistoryV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/pickup/history/list/v1/execute.js";
import { executeListFbsPickupPlanningV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/pickup/planning/list/v1/execute.js";
import { executeListReturnPointsForWarehouseCreateV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/return-point/list-for-create/v1/execute.js";
import { executeListReturnPointsForWarehouseUpdateV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/return-point/list-for-update/v1/execute.js";
import { executeCheckFbsWarehouseReturnMileV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/return-mile/check/v1/execute.js";
import { executeGetFbsWarehouseReturnMileInfoV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/return-mile/info/v1/execute.js";
import { executeUpdateFbsWarehouseV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/update/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon FBS warehouse return-mile and pickup API", () => {
  it("maps and validates all ten operations", async () => {
    const update = transportWith({ operation_id: "OP-1" });
    await executeUpdateFbsWarehouseV1(update, {
      address_coordinates: { latitude: 55.75, longitude: 37.61 },
      warehouse_id: 1,
    });
    expect(update.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/update",
      retrySafety: "unsafe",
    });

    const firstMile = transportWith({ operation_id: "OP-2" });
    await executeUpdateFbsWarehouseFirstMileV1(firstMile, {
      cut_in_time: 3000,
      first_mile_type: "DROP_OFF",
      drop_off_point_id: 2,
      timeslot_id: 3,
      warehouse_id: 1,
    });
    expect(firstMile.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/first-mile/update",
      retrySafety: "unsafe",
    });

    const pointsResponse = {
      has_next: false,
      last_id: 2,
      points: [
        {
          id: 2,
          type: "PVZ",
          working_days: [{ day: "MONDAY", from: "09:00", to: "18:00" }],
        },
      ],
    };
    const createPoints = transportWith(pointsResponse);
    await executeListReturnPointsForWarehouseCreateV1(createPoints, {
      coordinates: { latitude: 55.75, longitude: 37.61 },
      country_code: "RU",
      limit: 100,
    });
    expect(createPoints.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/create/return-point/list",
      retrySafety: "safe",
    });

    const updatePoints = transportWith(pointsResponse);
    await executeListReturnPointsForWarehouseUpdateV1(updatePoints, {
      limit: 100,
      warehouse_id: 1,
    });
    expect(updatePoints.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/update/return-point/list",
      retrySafety: "safe",
    });

    const info = transportWith({
      return_mile_settings: [
        {
          is_return_mile_required: true,
          return_point: { id: 2 },
          warehouse_id: 1,
        },
      ],
    });
    await executeGetFbsWarehouseReturnMileInfoV1(info, {
      warehouse_ids: ["1"],
    });
    expect(info.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/return-mile/info",
      retrySafety: "safe",
    });

    const check = transportWith({ should_set_return_mile: true });
    await executeCheckFbsWarehouseReturnMileV1(check, {
      country_code: "RU",
      first_mile_type: "PICK_UP",
      is_kgt: false,
    });
    expect(check.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/return-mile/check",
      retrySafety: "safe",
    });

    const createCourier = transportWith(undefined);
    await executeCreateFbsPickupCourierCallV1(createCourier, {
      warehouse_id: 1,
    });
    expect(createCourier.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/pickup/courier/create",
      retrySafety: "unsafe",
    });

    const cancelCourier = transportWith(undefined);
    await executeCancelFbsPickupCourierCallV1(cancelCourier, {
      warehouse_id: 1,
    });
    expect(cancelCourier.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/pickup/courier/cancel",
      retrySafety: "unsafe",
    });

    const history = transportWith({
      result: {
        cursor: "next",
        history: [
          {
            updated_at: "2026-08-15T10:00:00Z",
            warehouse_id: 1,
            was_planned: true,
          },
        ],
      },
    });
    await executeListFbsPickupHistoryV1(history, { limit: 100 });
    expect(history.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/pickup/history/list",
      retrySafety: "safe",
    });

    const planning = transportWith({
      result: {
        warehouses: [
          {
            is_pickup_planned: false,
            last_pickup_plan_date_at: "2026-08-15T10:00:00Z",
            warehouse_id: 1,
          },
        ],
      },
    });
    await executeListFbsPickupPlanningV1(planning);
    expect(planning.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/pickup/planning/list",
      retrySafety: "safe",
    });
  });

  it("rejects an invalid nested return-point type", async () => {
    await expect(
      executeListReturnPointsForWarehouseCreateV1(
        transportWith({ points: [{ type: "UNKNOWN" }] }),
        {
          coordinates: { latitude: 55.75, longitude: 37.61 },
          country_code: "RU",
          limit: 100,
        },
      ),
    ).rejects.toMatchObject({
      operationId: "WarehouseFBSCreateReturnPointList",
    });
  });
});
