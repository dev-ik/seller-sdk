// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { DeleteApiV3WarehousesWarehouseIdResponse } from "./types.js";

export function parseDeleteApiV3WarehousesWarehouseIdResponse(
  status: number,
  input: unknown,
): DeleteApiV3WarehousesWarehouseIdResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "DELETE /api/v3/warehouses/{warehouseId}",
        status,
      );
  }
}
