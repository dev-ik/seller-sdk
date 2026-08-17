// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutApiV3OrdersOrderIdMetaExpirationResponse } from "./types.js";

export function parsePutApiV3OrdersOrderIdMetaExpirationResponse(
  status: number,
  input: unknown,
): PutApiV3OrdersOrderIdMetaExpirationResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "PUT /api/v3/orders/{orderId}/meta/expiration",
        status,
      );
  }
}
