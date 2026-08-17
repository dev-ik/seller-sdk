// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { DeleteApiV3StocksWarehouseIdResponse } from "./types.js";

export function parseDeleteApiV3StocksWarehouseIdResponse(
  status: number,
  input: unknown,
): DeleteApiV3StocksWarehouseIdResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "DELETE /api/v3/stocks/{warehouseId}",
        status,
      );
  }
}
