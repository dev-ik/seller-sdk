// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PostV0NormquerySetMinusResponse } from "./types.js";

export function parsePostV0NormquerySetMinusResponse(
  status: number,
  input: unknown,
): PostV0NormquerySetMinusResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("postV0NormquerySetMinus", status);
  }
}
