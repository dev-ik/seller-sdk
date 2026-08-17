// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1WarehouseRemainsTasksTaskIdDownloadResponse } from "./types.js";

const getV1WarehouseRemainsTasksTaskIdDownloadResponse200Schema =
  createWbSchema<GetV1WarehouseRemainsTasksTaskIdDownloadResponse>(
    {
      kind: "array",
      items: {
        kind: "object",
        properties: {
          brand: { kind: "string" },
          subjectName: { kind: "string" },
          vendorCode: { kind: "string" },
          nmId: { kind: "number", integer: true },
          barcode: { kind: "string" },
          techSize: { kind: "string" },
          volume: { kind: "number" },
          warehouses: {
            kind: "array",
            items: {
              kind: "object",
              properties: {
                warehouseName: { kind: "string" },
                quantity: { kind: "number", integer: true },
              },
              required: [],
            },
          },
        },
        required: [],
      },
    },
    reportsComponents,
  );

export function parseGetV1WarehouseRemainsTasksTaskIdDownloadResponse(
  status: number,
  input: unknown,
): GetV1WarehouseRemainsTasksTaskIdDownloadResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1WarehouseRemainsTasksTaskIdDownloadResponse200Schema,
        input,
        "getV1WarehouseRemainsTasksTaskIdDownload",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "getV1WarehouseRemainsTasksTaskIdDownload",
        status,
      );
  }
}
