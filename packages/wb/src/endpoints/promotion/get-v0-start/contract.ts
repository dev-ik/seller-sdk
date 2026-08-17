// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { GetV0StartResponse } from "./types.js";

export function parseGetV0StartResponse(
  status: number,
  input: unknown,
): GetV0StartResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("getV0Start", status);
  }
}
