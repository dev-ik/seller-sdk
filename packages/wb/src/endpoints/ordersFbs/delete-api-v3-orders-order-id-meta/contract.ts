// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { DeleteApiV3OrdersOrderIdMetaResponse } from "./types.js";

export function parseDeleteApiV3OrdersOrderIdMetaResponse(
  status: number,
  input: unknown,
): DeleteApiV3OrdersOrderIdMetaResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "DELETE /api/v3/orders/{orderId}/meta",
        status,
      );
  }
}
