// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { DeleteApiV3SuppliesSupplyIdResponse } from "./types.js";

export function parseDeleteApiV3SuppliesSupplyIdResponse(
  status: number,
  input: unknown,
): DeleteApiV3SuppliesSupplyIdResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "DELETE /api/v3/supplies/{supplyId}",
        status,
      );
  }
}
