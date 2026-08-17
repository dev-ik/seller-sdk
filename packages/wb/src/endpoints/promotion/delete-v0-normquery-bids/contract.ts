// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { DeleteV0NormqueryBidsResponse } from "./types.js";

export function parseDeleteV0NormqueryBidsResponse(
  status: number,
  input: unknown,
): DeleteV0NormqueryBidsResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("deleteV0NormqueryBids", status);
  }
}
