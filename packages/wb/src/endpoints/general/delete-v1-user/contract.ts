// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { DeleteV1UserResponse } from "./types.js";

export function parseDeleteV1UserResponse(
  status: number,
  input: unknown,
): DeleteV1UserResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("deleteV1User", status);
  }
}
