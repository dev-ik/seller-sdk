// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutApiV3PassesPassIdResponse } from "./types.js";

export function parsePutApiV3PassesPassIdResponse(
  status: number,
  input: unknown,
): PutApiV3PassesPassIdResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("PUT /api/v3/passes/{passId}", status);
  }
}
