// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutApiV3StocksWarehouseIdResponse } from "./types.js";

export function parsePutApiV3StocksWarehouseIdResponse(
  status: number,
  input: unknown,
): PutApiV3StocksWarehouseIdResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "PUT /api/v3/stocks/{warehouseId}",
        status,
      );
  }
}
