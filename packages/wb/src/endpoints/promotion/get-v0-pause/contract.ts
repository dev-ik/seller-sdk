// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { GetV0PauseResponse } from "./types.js";

export function parseGetV0PauseResponse(
  status: number,
  input: unknown,
): GetV0PauseResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("getV0Pause", status);
  }
}
