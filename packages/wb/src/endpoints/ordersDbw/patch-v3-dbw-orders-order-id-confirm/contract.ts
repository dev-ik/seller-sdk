// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PatchV3DbwOrdersOrderIdConfirmResponse } from "./types.js";

export function parsePatchV3DbwOrdersOrderIdConfirmResponse(
  status: number,
  input: unknown,
): PatchV3DbwOrdersOrderIdConfirmResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "patchV3DbwOrdersOrderIdConfirm",
        status,
      );
  }
}
