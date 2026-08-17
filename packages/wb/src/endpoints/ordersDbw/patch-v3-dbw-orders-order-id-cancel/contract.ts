// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PatchV3DbwOrdersOrderIdCancelResponse } from "./types.js";

export function parsePatchV3DbwOrdersOrderIdCancelResponse(
  status: number,
  input: unknown,
): PatchV3DbwOrdersOrderIdCancelResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("patchV3DbwOrdersOrderIdCancel", status);
  }
}
