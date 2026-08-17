// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { DeleteApiV3PassesPassIdResponse } from "./types.js";

export function parseDeleteApiV3PassesPassIdResponse(
  status: number,
  input: unknown,
): DeleteApiV3PassesPassIdResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "DELETE /api/v3/passes/{passId}",
        status,
      );
  }
}
