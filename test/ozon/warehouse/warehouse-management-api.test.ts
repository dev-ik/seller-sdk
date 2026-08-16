import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ARCHIVE_WAREHOUSE_OPERATION_ID,
  executeArchiveFbsWarehouse,
} from "../../../packages/ozon/src/endpoints/warehouse/archive/execute.js";
import {
  executeGetWarehouseInvalidProducts,
  GET_WAREHOUSE_INVALID_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/invalid-products/get/execute.js";
import {
  executeListWarehousesWithInvalidProducts,
  LIST_WAREHOUSES_WITH_INVALID_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/invalid-products/list-warehouses/execute.js";
import {
  executeListWarehousesV2,
  LIST_WAREHOUSES_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/list/v2/execute.js";
import {
  executeGetFbsWarehouseOperationStatus,
  GET_WAREHOUSE_OPERATION_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/operation/status/execute.js";
import {
  executeUnarchiveFbsWarehouse,
  UNARCHIVE_WAREHOUSE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/warehouse/unarchive/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Warehouse management API", () => {
  it("lists v2 warehouses with cursor pagination", async () => {
    const input = { limit: 100, warehouse_ids: ["20605650762000"] };
    const mock = transport({
      cursor: "next",
      has_next: true,
      warehouses: [
        {
          warehouse_id: 20605650762000,
          name: "Synthetic warehouse",
          pause_at: null,
          carriage_label_type: "BIG",
          first_mile: { type: "PICK_UP", timeslot_id: 10 },
          created_at: "2026-08-01T00:00:00Z",
          updated_at: "2026-08-02T00:00:00Z",
          working_days: ["MONDAY"],
        },
      ],
    });
    const response = await executeListWarehousesV2(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_WAREHOUSES_V2_OPERATION_ID,
      path: "/v2/warehouse/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.warehouses?.[0]?.pause_at).toBeNull();
  });

  it("gets an FBS warehouse operation status", async () => {
    const input = { operation_id: "test-operation" };
    const mock = transport({
      status: "SUCCESS",
      type: "WAREHOUSE_ENABLE_DISABLE",
      result: { entity_id: 100 },
    });
    const response = await executeGetFbsWarehouseOperationStatus(mock, input);
    expect(mock.requests[0]).toMatchObject({
      body: input,
      retrySafety: "safe",
    });
    expect(response.status).toBe("SUCCESS");
  });

  it("archives an FBS warehouse without automatic retries", async () => {
    const input = { warehouse_id: 100, reason: "Synthetic reason" };
    const mock = transport({ operation_id: "archive-operation" });
    const response = await executeArchiveFbsWarehouse(mock, input);
    expect(mock.requests[0]).toMatchObject({
      path: "/v1/warehouse/archive",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.operation_id).toBe("archive-operation");
  });

  it("unarchives an FBS warehouse without automatic retries", async () => {
    const input = { warehouse_id: 100, return_point_id: 200 };
    const mock = transport({ operation_id: "unarchive-operation" });
    const response = await executeUnarchiveFbsWarehouse(mock, input);
    expect(mock.requests[0]).toMatchObject({
      path: "/v1/warehouse/unarchive",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.operation_id).toBe("unarchive-operation");
  });

  it("gets products with warehouse delivery restrictions", async () => {
    const input = { warehouse_id: 100, last_id: 10 };
    const mock = transport({
      warehouse_id: 100,
      last_id: 20,
      has_next: false,
      validation_results: [
        {
          item: {
            sku: 500,
            weight_g: 100.5,
            size: { height_mm: 10, length_mm: 20, width_mm: 30 },
          },
          state: "NOT_VALID",
          validation_errors: [
            {
              characteristic: "WEIGHT",
              restriction_vwc: 10.5,
              type: "GREATER_THAN_MAX",
            },
          ],
        },
      ],
    });
    const response = await executeGetWarehouseInvalidProducts(mock, input);
    expect(mock.requests[0]).toMatchObject({
      body: input,
      retrySafety: "safe",
    });
    expect(response.validation_results?.[0]?.item?.sku).toBe(500);
  });

  it("lists warehouses containing restricted products", async () => {
    const mock = transport({ warehouse_ids: ["100", "200"] });
    const response = await executeListWarehousesWithInvalidProducts(mock);
    expect(mock.requests[0]).toMatchObject({
      path: "/v1/warehouse/warehouses-with-invalid-products",
      retrySafety: "safe",
    });
    expect(response.warehouse_ids).toEqual(["100", "200"]);
  });

  it.each([
    [
      LIST_WAREHOUSES_V2_OPERATION_ID,
      (mock: MockTransport) => executeListWarehousesV2(mock, { limit: 100 }),
      { warehouses: [{ carriage_label_type: "UNKNOWN" }] },
    ],
    [
      GET_WAREHOUSE_OPERATION_STATUS_OPERATION_ID,
      (mock: MockTransport) =>
        executeGetFbsWarehouseOperationStatus(mock, {
          operation_id: "test-operation",
        }),
      { status: "UNKNOWN" },
    ],
    [
      ARCHIVE_WAREHOUSE_OPERATION_ID,
      (mock: MockTransport) =>
        executeArchiveFbsWarehouse(mock, { warehouse_id: 1, reason: "Test" }),
      { operation_id: 1 },
    ],
    [
      UNARCHIVE_WAREHOUSE_OPERATION_ID,
      (mock: MockTransport) =>
        executeUnarchiveFbsWarehouse(mock, { warehouse_id: 1 }),
      { operation_id: false },
    ],
    [
      GET_WAREHOUSE_INVALID_PRODUCTS_OPERATION_ID,
      (mock: MockTransport) =>
        executeGetWarehouseInvalidProducts(mock, { warehouse_id: 1 }),
      { validation_results: [{ state: "VALID" }] },
    ],
    [
      LIST_WAREHOUSES_WITH_INVALID_PRODUCTS_OPERATION_ID,
      (mock: MockTransport) => executeListWarehousesWithInvalidProducts(mock),
      { warehouse_ids: [1] },
    ],
  ] as const)(
    "rejects malformed %s responses",
    async (operationId, run, body) => {
      await expect(run(transport(body))).rejects.toMatchObject({ operationId });
    },
  );
});
