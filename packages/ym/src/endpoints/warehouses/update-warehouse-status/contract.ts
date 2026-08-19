// Generated runtime response contract for this Yandex Market endpoint.
import { warehousesComponents } from "../../../contracts/warehouses.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateWarehouseStatusResponse } from "./types.js";

const updateWarehouseStatusResponse200Schema =
  createYmSchema<UpdateWarehouseStatusResponse>(
    { kind: "ref", name: "UpdateWarehouseStatusResponse" },
    warehousesComponents,
  );

export function parseUpdateWarehouseStatusResponse(
  status: number,
  input: unknown,
): UpdateWarehouseStatusResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateWarehouseStatusResponse200Schema,
        input,
        "updateWarehouseStatus",
      );
    default:
      return unexpectedYmSuccessStatus("updateWarehouseStatus", status);
  }
}
