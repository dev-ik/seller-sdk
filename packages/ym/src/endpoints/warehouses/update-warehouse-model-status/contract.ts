// Generated runtime response contract for this Yandex Market endpoint.
import { warehousesComponents } from "../../../contracts/warehouses.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateWarehouseModelStatusResponse } from "./types.js";

const updateWarehouseModelStatusResponse200Schema =
  createYmSchema<UpdateWarehouseModelStatusResponse>(
    { kind: "ref", name: "UpdateWarehouseModelStatusResponse" },
    warehousesComponents,
  );

export function parseUpdateWarehouseModelStatusResponse(
  status: number,
  input: unknown,
): UpdateWarehouseModelStatusResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateWarehouseModelStatusResponse200Schema,
        input,
        "updateWarehouseModelStatus",
      );
    default:
      return unexpectedYmSuccessStatus("updateWarehouseModelStatus", status);
  }
}
