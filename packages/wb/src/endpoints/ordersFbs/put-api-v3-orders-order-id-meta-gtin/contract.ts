// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutApiV3OrdersOrderIdMetaGtinResponse } from "./types.js";

export function parsePutApiV3OrdersOrderIdMetaGtinResponse(
  status: number,
  input: unknown,
): PutApiV3OrdersOrderIdMetaGtinResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "PUT /api/v3/orders/{orderId}/meta/gtin",
        status,
      );
  }
}
