import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeCreateProductCertificateV2 } from "../../../packages/ozon/src/endpoints/product/certificate/create/v2/execute.js";
import { executeListProductCertificateOptionsV2 } from "../../../packages/ozon/src/endpoints/product/certificate/options/list/v2/execute.js";
import { executeGetProductCertificateParamsV2 } from "../../../packages/ozon/src/endpoints/product/certificate/params/get/v2/execute.js";
import { executeCreateFbsWarehouseV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/create/v1/execute.js";
import { executeListDropOffPointsForWarehouseCreateV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/drop-off/points/list-for-create/v1/execute.js";
import { executeListDropOffPointsForWarehouseUpdateV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/drop-off/points/list-for-update/v1/execute.js";
import { executeListDropOffTimeslotsForWarehouseCreateV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/drop-off/timeslot/list-for-create/v1/execute.js";
import { executeListDropOffTimeslotsForWarehouseUpdateV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/drop-off/timeslot/list-for-update/v1/execute.js";
import { executeListPickUpTimeslotsForWarehouseCreateV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/pick-up/timeslot/list-for-create/v1/execute.js";
import { executeListPickUpTimeslotsForWarehouseUpdateV1 } from "../../../packages/ozon/src/endpoints/warehouse/fbs/pick-up/timeslot/list-for-update/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon certificate v2 and FBS warehouse creation API", () => {
  it("maps and validates all ten operations", async () => {
    const options = transportWith({
      option: [{ name: "NAME", required: true }],
    });
    await executeListProductCertificateOptionsV2(options);
    expect(options.requests[0]).toMatchObject({
      path: "/v2/product/certification/options",
      retrySafety: "safe",
    });

    const params = transportWith({
      params: [{ name: "FILES", required: true }],
    });
    await executeGetProductCertificateParamsV2(params, {
      params: { certificate_type: "DECLARATION", skus: ["1001"] },
    });
    expect(params.requests[0]).toMatchObject({
      path: "/v2/product/certification/params",
      retrySafety: "safe",
    });

    const certificate = transportWith({
      certificate_id: null,
      params: [{ error: "required", name: "FILES", state: "MISSING" }],
      status: "INCOMPLETE",
    });
    await executeCreateProductCertificateV2(certificate, {
      params: { name: "Certificate" },
    });
    expect(certificate.requests[0]).toMatchObject({
      path: "/v2/product/certificate/create",
      retrySafety: "unsafe",
    });

    const pointsBody = {
      points: [
        {
          address: "Address",
          coordinates: { latitude: 55.75, longitude: 37.61 },
          id: "1",
          last_transit_time_local: { hours: 18, minutes: 30 },
          type: "PVZ",
        },
      ],
    };
    const createPoints = transportWith(pointsBody);
    await executeListDropOffPointsForWarehouseCreateV1(createPoints, {
      country_code: "RU",
      is_kgt: false,
    });
    expect(createPoints.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/create/drop-off/list",
      retrySafety: "safe",
    });

    const updatePoints = transportWith(pointsBody);
    await executeListDropOffPointsForWarehouseUpdateV1(updatePoints, {
      warehouse_id: 1,
    });
    expect(updatePoints.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/update/drop-off/list",
      retrySafety: "safe",
    });

    const timeslotsBody = {
      timeslots: [{ from: "09:00", id: 1, to: "18:00" }],
    };
    const createDropOff = transportWith(timeslotsBody);
    await executeListDropOffTimeslotsForWarehouseCreateV1(createDropOff, {
      drop_off_point_id: 1,
    });
    expect(createDropOff.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/create/drop-off/timeslot/list",
      retrySafety: "safe",
    });

    const updateDropOff = transportWith(timeslotsBody);
    await executeListDropOffTimeslotsForWarehouseUpdateV1(updateDropOff, {
      drop_off_point_id: 1,
      warehouse_id: 2,
    });
    expect(updateDropOff.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/update/drop-off/timeslot/list",
      retrySafety: "safe",
    });

    const createPickUp = transportWith({
      is_pickup_supported: true,
      ...timeslotsBody,
    });
    await executeListPickUpTimeslotsForWarehouseCreateV1(createPickUp, {
      address_coordinates: { latitude: 55.75, longitude: 37.61 },
      is_kgt: false,
    });
    expect(createPickUp.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/create/pick-up/timeslot/list",
      retrySafety: "safe",
    });

    const updatePickUp = transportWith(timeslotsBody);
    await executeListPickUpTimeslotsForWarehouseUpdateV1(updatePickUp, {
      warehouse_id: 2,
    });
    expect(updatePickUp.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/update/pick-up/timeslot/list",
      retrySafety: "safe",
    });

    const warehouse = transportWith({ operation_id: "OP-1" });
    await executeCreateFbsWarehouseV1(warehouse, {
      address_coordinates: { latitude: 55.75, longitude: 37.61 },
      cut_in_time: 3000,
      first_mile_type: "PICK_UP",
      is_kgt: false,
      name: "Warehouse",
      phone: "+7(900)000-00-00",
      timeslot_id: 1,
    });
    expect(warehouse.requests[0]).toMatchObject({
      path: "/v1/warehouse/fbs/create",
      retrySafety: "unsafe",
    });
  });

  it("rejects an invalid nested drop-off type", async () => {
    await expect(
      executeListDropOffPointsForWarehouseCreateV1(
        transportWith({ points: [{ type: "UNKNOWN" }] }),
        { country_code: "RU", is_kgt: false },
      ),
    ).rejects.toMatchObject({
      operationId: "WarehouseAPI_ListDropOffPointsForCreateFBSWarehouse",
    });
  });
});
