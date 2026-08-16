import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeBindDeliveryPolygonV2 } from "../../../packages/ozon/src/endpoints/polygon/bind/v2/execute.js";
import { executeDeleteDeliveryPolygonV1 } from "../../../packages/ozon/src/endpoints/polygon/delete/v1/execute.js";
import { executeListDeliveryPolygonsV1 } from "../../../packages/ozon/src/endpoints/polygon/list/v1/execute.js";
import { executeCreateErfbsAggregatorWarehouseV1 } from "../../../packages/ozon/src/endpoints/warehouse/erfbs/aggregator/create/v1/execute.js";
import { executeUpdateErfbsAggregatorDeliveryMethodV1 } from "../../../packages/ozon/src/endpoints/warehouse/erfbs/aggregator/delivery-method/update/v1/execute.js";
import { executeCreateErfbsNonIntegratedWarehouseV1 } from "../../../packages/ozon/src/endpoints/warehouse/erfbs/non-integrated/create/v1/execute.js";
import { executeUpdateErfbsNonIntegratedDeliveryMethodV1 } from "../../../packages/ozon/src/endpoints/warehouse/erfbs/non-integrated/delivery-method/update/v1/execute.js";
import { executeUpdateErfbsWarehouseV1 } from "../../../packages/ozon/src/endpoints/warehouse/erfbs/update/v1/execute.js";
import { executePauseRfbsWarehouseV1 } from "../../../packages/ozon/src/endpoints/warehouse/rfbs/pause/v1/execute.js";
import { executeUnpauseRfbsWarehouseV1 } from "../../../packages/ozon/src/endpoints/warehouse/rfbs/unpause/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

const warehouse = {
  address_coordinates: { latitude: 55.75, longitude: 37.61 },
  name: "Warehouse",
  phone: "+79990000000",
  timetable_warehouse: {
    working_days: [{ day: "MONDAY" as const, from: "09:00", to: "18:00" }],
  },
};

describe("Ozon eRFBS, rFBS and polygon API", () => {
  it("maps and validates all ten operations", async () => {
    const aggregatorCreate = transportWith({ operation_id: "OP-1" });
    await executeCreateErfbsAggregatorWarehouseV1(aggregatorCreate, {
      ...warehouse,
      delivery_method: {
        courier_phones: ["+79990000000"],
        cut_in: 60,
        deliver_to_pvz: true,
        delivery_costs: { seller_payment: 100 },
        name: "Partners",
        return_settings: { contact_days: 2, return_method: "COURIER" },
      },
    });
    expect(aggregatorCreate.requests[0]).toMatchObject({
      path: "/v1/warehouse/erfbs/aggregator/create",
      retrySafety: "unsafe",
    });

    const warehouseUpdate = transportWith({ operation_id: "OP-2" });
    await executeUpdateErfbsWarehouseV1(warehouseUpdate, {
      name: "Updated warehouse",
      warehouse_id: 1,
    });
    expect(warehouseUpdate.requests[0]).toMatchObject({
      path: "/v1/warehouse/erfbs/update",
      retrySafety: "unsafe",
    });

    const aggregatorUpdate = transportWith({ operation_id: "OP-3" });
    await executeUpdateErfbsAggregatorDeliveryMethodV1(aggregatorUpdate, {
      delivery_method_id: 2,
      deliver_to_pvz: false,
      warehouse_id: 1,
    });
    expect(aggregatorUpdate.requests[0]).toMatchObject({
      path: "/v1/warehouse/erfbs/aggregator/delivery-method/update",
      retrySafety: "unsafe",
    });

    const nonIntegratedCreate = transportWith({ operation_id: "OP-4" });
    await executeCreateErfbsNonIntegratedWarehouseV1(nonIntegratedCreate, {
      ...warehouse,
      delivery_method: {
        courier_cutoff: 15,
        cut_in: 60,
        delivery_polygons: [{ id: 3, time: 30 }],
        name: "Own delivery",
        return_settings: { return_method: "COURIER" },
      },
    });
    expect(nonIntegratedCreate.requests[0]).toMatchObject({
      path: "/v1/warehouse/erfbs/non-integrated/create",
      retrySafety: "unsafe",
    });

    const nonIntegratedUpdate = transportWith({ operation_id: "OP-5" });
    await executeUpdateErfbsNonIntegratedDeliveryMethodV1(nonIntegratedUpdate, {
      courier_cutoff: 15,
      cut_in: 60,
      delivery_method_id: 2,
      name: "Own delivery",
      return_settings: { return_method: "COURIER" },
      warehouse_id: 1,
    });
    expect(nonIntegratedUpdate.requests[0]).toMatchObject({
      path: "/v1/warehouse/erfbs/non-integrated/delivery-method/update",
      retrySafety: "unsafe",
    });

    const pause = transportWith({ operation_id: "OP-6" });
    await executePauseRfbsWarehouseV1(pause, { warehouse_id: 1 });
    expect(pause.requests[0]).toMatchObject({
      path: "/v1/warehouse/rfbs/pause",
      retrySafety: "unsafe",
    });

    const unpause = transportWith({ operation_id: "OP-7" });
    await executeUnpauseRfbsWarehouseV1(unpause, { warehouse_id: 1 });
    expect(unpause.requests[0]).toMatchObject({
      path: "/v1/warehouse/rfbs/unpause",
      retrySafety: "unsafe",
    });

    const bind = transportWith(undefined);
    await executeBindDeliveryPolygonV2(bind, {
      delivery_method_id: 2,
      polygon_id: 3,
      time: 30,
      warehouse_id: 1,
    });
    expect(bind.requests[0]).toMatchObject({
      path: "/v2/polygon/bind",
      retrySafety: "unsafe",
    });

    const remove = transportWith(undefined);
    await executeDeleteDeliveryPolygonV1(remove, {
      delivery_method_id: 2,
      polygon_id: 3,
      warehouse_id: 1,
    });
    expect(remove.requests[0]).toMatchObject({
      path: "/v1/polygon/delete",
      retrySafety: "unsafe",
    });

    const list = transportWith({
      polygons: [{ coordinates: "[[[37.6,55.7]]]", polygon_id: 3, time: 30 }],
    });
    await executeListDeliveryPolygonsV1(list, {
      delivery_method_id: 2,
      warehouse_id: 1,
    });
    expect(list.requests[0]).toMatchObject({
      path: "/v1/polygon/list",
      retrySafety: "safe",
    });
  });

  it("rejects an invalid nested polygon", async () => {
    await expect(
      executeListDeliveryPolygonsV1(
        transportWith({ polygons: [{ polygon_id: "bad" }] }),
        { delivery_method_id: 2, warehouse_id: 1 },
      ),
    ).rejects.toMatchObject({ operationId: "PolygonList" });
  });
});
