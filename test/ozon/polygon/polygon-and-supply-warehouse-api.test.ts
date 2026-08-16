import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  BIND_DELIVERY_POLYGON_V1_OPERATION_ID,
  executeBindDeliveryPolygonV1,
} from "../../../packages/ozon/src/endpoints/polygon/bind/v1/execute.js";
import {
  CREATE_DELIVERY_POLYGON_V1_OPERATION_ID,
  executeCreateDeliveryPolygonV1,
} from "../../../packages/ozon/src/endpoints/polygon/create/v1/execute.js";
import {
  executeListSupplierAvailableWarehouses,
  LIST_SUPPLIER_AVAILABLE_WAREHOUSES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supplier/available-warehouses/execute.js";
import {
  executeListFboSupplyWarehouses,
  LIST_FBO_SUPPLY_WAREHOUSES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/fbo/list/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Delivery polygon and supply warehouse API", () => {
  it("creates a delivery polygon without automatic retries", async () => {
    const input = { coordinates: "[[[55.0,37.0],[55.1,37.1],[55.0,37.2]]]" };
    const mock = transport({ polygon_id: 1323 });
    const response = await executeCreateDeliveryPolygonV1(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: CREATE_DELIVERY_POLYGON_V1_OPERATION_ID,
      path: "/v1/polygon/create",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.polygon_id).toBe(1323);
  });

  it("binds delivery polygons without automatic retries", async () => {
    const input = {
      delivery_method_id: 10,
      polygons: [{ polygon_id: 1323, time: 30 }],
      warehouse_location: { lat: "55.0", lon: "37.0" },
    };
    const mock = transport({});
    await expect(executeBindDeliveryPolygonV1(mock, input)).resolves.toEqual(
      {},
    );
    expect(mock.requests[0]).toMatchObject({
      operationId: BIND_DELIVERY_POLYGON_V1_OPERATION_ID,
      path: "/v1/polygon/bind",
      body: input,
      retrySafety: "unsafe",
    });
  });

  it("lists supplier warehouse capacity", async () => {
    const mock = transport({
      result: [
        {
          schedule: {
            date: "2026-08-20T00:00:00Z",
            capacity: [
              {
                start: "2026-08-20T00:00:00Z",
                end: "2026-08-21T00:00:00Z",
                value: 10,
              },
            ],
          },
          warehouse: { id: "100", name: "Synthetic warehouse" },
        },
      ],
    });
    const response = await executeListSupplierAvailableWarehouses(mock);
    expect(mock.requests[0]).toMatchObject({
      method: "GET",
      path: "/v1/supplier/available_warehouses",
      retrySafety: "safe",
    });
    expect(response.result?.[0]?.schedule?.capacity?.[0]?.value).toBe(10);
  });

  it("searches FBO supply warehouses", async () => {
    const input = {
      filter_by_supply_type: ["CREATE_TYPE_CROSSDOCK"],
      search: "Test",
    } as const;
    const mock = transport({
      search: [
        {
          address: "Synthetic address",
          coordinates: { latitude: 55, longitude: 37 },
          name: "Synthetic warehouse",
          warehouse_id: 100,
          warehouse_type: "WAREHOUSE_TYPE_CROSS_DOCK",
        },
      ],
    });
    const response = await executeListFboSupplyWarehouses(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_FBO_SUPPLY_WAREHOUSES_OPERATION_ID,
      body: input,
      retrySafety: "safe",
    });
    expect(response.search?.[0]?.warehouse_id).toBe(100);
  });

  it.each([
    [
      CREATE_DELIVERY_POLYGON_V1_OPERATION_ID,
      (mock: MockTransport) =>
        executeCreateDeliveryPolygonV1(mock, { coordinates: "[]" }),
      { polygon_id: "bad" },
    ],
    [
      BIND_DELIVERY_POLYGON_V1_OPERATION_ID,
      (mock: MockTransport) =>
        executeBindDeliveryPolygonV1(mock, {
          delivery_method_id: 1,
          polygons: [{ polygon_id: 1, time: 30 }],
          warehouse_location: { lat: "55", lon: "37" },
        }),
      null,
    ],
    [
      LIST_SUPPLIER_AVAILABLE_WAREHOUSES_OPERATION_ID,
      (mock: MockTransport) => executeListSupplierAvailableWarehouses(mock),
      { result: [{ schedule: { date: "bad" } }] },
    ],
    [
      LIST_FBO_SUPPLY_WAREHOUSES_OPERATION_ID,
      (mock: MockTransport) =>
        executeListFboSupplyWarehouses(mock, {
          filter_by_supply_type: ["CREATE_TYPE_DIRECT"],
          search: "Test",
        }),
      { search: [{ warehouse_type: "UNKNOWN" }] },
    ],
  ] as const)(
    "rejects malformed %s responses",
    async (operationId, run, body) => {
      await expect(run(transport(body))).rejects.toMatchObject({ operationId });
    },
  );
});
