// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { DeleteApiV3SuppliesSupplyIdTrbxResponse } from "./types.js";

export function parseDeleteApiV3SuppliesSupplyIdTrbxResponse(
  status: number,
  input: unknown,
): DeleteApiV3SuppliesSupplyIdTrbxResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "DELETE /api/v3/supplies/{supplyId}/trbx",
        status,
      );
  }
}
