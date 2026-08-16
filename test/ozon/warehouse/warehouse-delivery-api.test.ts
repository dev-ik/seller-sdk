import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListDeliveryMethodsV1,
  LIST_DELIVERY_METHODS_V1_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/delivery-method/list/v1/execute.js";
import {
  executeListDeliveryMethodsV2,
  LIST_DELIVERY_METHODS_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/delivery-method/list/v2/execute.js";
import {
  executeGetDeliveryMethodReturnSettings,
  GET_DELIVERY_METHOD_RETURN_SETTINGS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/delivery-method/return-settings/get/execute.js";
import {
  executeListWarehousesV1,
  LIST_WAREHOUSES_V1_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/list/v1/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Warehouse and delivery method API", () => {
  it("lists legacy seller warehouses", async () => {
    const input = { limit: 100, offset: 0 };
    const mock = transport({
      result: [
        {
          warehouse_id: 10,
          name: "Synthetic",
          first_mile_type: { first_mile_type: "DropOff" },
          working_days: ["MONDAY"],
        },
      ],
    });
    const response = await executeListWarehousesV1(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_WAREHOUSES_V1_OPERATION_ID,
      path: "/v1/warehouse/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.[0]?.warehouse_id).toBe(10);
  });

  it("lists legacy delivery methods", async () => {
    const input = { limit: 100, offset: 0 };
    const mock = transport({
      has_next: false,
      result: [
        {
          id: 20,
          name: "Synthetic",
          created_at: "2026-08-01T00:00:00Z",
          updated_at: "2026-08-02T00:00:00Z",
        },
      ],
    });
    const response = await executeListDeliveryMethodsV1(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_DELIVERY_METHODS_V1_OPERATION_ID,
      path: "/v1/delivery-method/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.[0]?.id).toBe(20);
  });

  it("lists v2 delivery methods with cursor pagination", async () => {
    const input = { limit: 100, sort_dir: "ASC" } as const;
    const mock = transport({
      cursor: "next",
      has_next: true,
      delivery_methods: [
        {
          id: 30,
          is_express: false,
          created_at: "2026-08-01T00:00:00Z",
          updated_at: "2026-08-02T00:00:00Z",
          tpl_dropoff_point: {
            address_coordinates: { latitude: 55.75, longitude: 37.62 },
          },
        },
      ],
    });
    const response = await executeListDeliveryMethodsV2(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_DELIVERY_METHODS_V2_OPERATION_ID,
      path: "/v2/delivery-method/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.cursor).toBe("next");
  });

  it("gets delivery method return settings", async () => {
    const input = { delivery_method_id: 30 };
    const mock = transport({
      settings: {
        courier_details: { contact_days: 2 },
        transport_company_details: {
          transport_company_names: ["Synthetic"],
          zipcode: "000000",
        },
      },
    });
    const response = await executeGetDeliveryMethodReturnSettings(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: GET_DELIVERY_METHOD_RETURN_SETTINGS_OPERATION_ID,
      path: "/v1/delivery-method/return/settings/get",
      body: input,
      retrySafety: "safe",
    });
    expect(response.settings?.courier_details?.contact_days).toBe(2);
  });

  it.each([
    [
      LIST_WAREHOUSES_V1_OPERATION_ID,
      (mock: MockTransport) => executeListWarehousesV1(mock, { limit: 100 }),
      { result: [{ warehouse_id: "bad" }] },
    ],
    [
      LIST_DELIVERY_METHODS_V1_OPERATION_ID,
      (mock: MockTransport) =>
        executeListDeliveryMethodsV1(mock, { limit: 100 }),
      { has_next: "bad" },
    ],
    [
      LIST_DELIVERY_METHODS_V2_OPERATION_ID,
      (mock: MockTransport) =>
        executeListDeliveryMethodsV2(mock, { limit: 100 }),
      { delivery_methods: [{ is_express: "bad" }] },
    ],
    [
      GET_DELIVERY_METHOD_RETURN_SETTINGS_OPERATION_ID,
      (mock: MockTransport) =>
        executeGetDeliveryMethodReturnSettings(mock, {
          delivery_method_id: 1,
        }),
      { settings: { courier_details: { contact_days: "bad" } } },
    ],
  ] as const)(
    "rejects malformed %s responses",
    async (operationId, run, body) => {
      await expect(run(transport(body))).rejects.toMatchObject({ operationId });
    },
  );
});
