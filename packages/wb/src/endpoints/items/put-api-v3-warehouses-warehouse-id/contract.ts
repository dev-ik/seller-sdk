// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutApiV3WarehousesWarehouseIdResponse } from "./types.js";

export function parsePutApiV3WarehousesWarehouseIdResponse(
  status: number,
  input: unknown,
): PutApiV3WarehousesWarehouseIdResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "PUT /api/v3/warehouses/{warehouseId}",
        status,
      );
  }
}
