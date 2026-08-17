// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutApiV3DbwWarehousesWarehouseIdContactsResponse } from "./types.js";

export function parsePutApiV3DbwWarehousesWarehouseIdContactsResponse(
  status: number,
  input: unknown,
): PutApiV3DbwWarehousesWarehouseIdContactsResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "PUT /api/v3/dbw/warehouses/{warehouseId}/contacts",
        status,
      );
  }
}
