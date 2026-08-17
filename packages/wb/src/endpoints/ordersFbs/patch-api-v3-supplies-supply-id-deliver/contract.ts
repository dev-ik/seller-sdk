// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PatchApiV3SuppliesSupplyIdDeliverResponse } from "./types.js";

export function parsePatchApiV3SuppliesSupplyIdDeliverResponse(
  status: number,
  input: unknown,
): PatchApiV3SuppliesSupplyIdDeliverResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "PATCH /api/v3/supplies/{supplyId}/deliver",
        status,
      );
  }
}
