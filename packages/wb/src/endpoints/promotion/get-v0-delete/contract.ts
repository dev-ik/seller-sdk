// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { GetV0DeleteResponse } from "./types.js";

export function parseGetV0DeleteResponse(
  status: number,
  input: unknown,
): GetV0DeleteResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("getV0Delete", status);
  }
}
