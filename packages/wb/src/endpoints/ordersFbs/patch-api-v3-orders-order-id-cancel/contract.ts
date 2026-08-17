// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PatchApiV3OrdersOrderIdCancelResponse } from "./types.js";

export function parsePatchApiV3OrdersOrderIdCancelResponse(
  status: number,
  input: unknown,
): PatchApiV3OrdersOrderIdCancelResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "PATCH /api/v3/orders/{orderId}/cancel",
        status,
      );
  }
}
