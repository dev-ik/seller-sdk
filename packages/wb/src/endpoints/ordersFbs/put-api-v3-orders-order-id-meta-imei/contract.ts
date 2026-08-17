// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutApiV3OrdersOrderIdMetaImeiResponse } from "./types.js";

export function parsePutApiV3OrdersOrderIdMetaImeiResponse(
  status: number,
  input: unknown,
): PutApiV3OrdersOrderIdMetaImeiResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "PUT /api/v3/orders/{orderId}/meta/imei",
        status,
      );
  }
}
