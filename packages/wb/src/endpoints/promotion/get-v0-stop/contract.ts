// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { GetV0StopResponse } from "./types.js";

export function parseGetV0StopResponse(
  status: number,
  input: unknown,
): GetV0StopResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("getV0Stop", status);
  }
}
