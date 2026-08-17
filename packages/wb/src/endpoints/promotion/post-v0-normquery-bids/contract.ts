// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PostV0NormqueryBidsResponse } from "./types.js";

export function parsePostV0NormqueryBidsResponse(
  status: number,
  input: unknown,
): PostV0NormqueryBidsResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("postV0NormqueryBids", status);
  }
}
