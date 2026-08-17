// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse } from "./types.js";

export function parsePutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse(
  status: number,
  input: unknown,
): PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "PUT /api/marketplace/v3/orders/{orderId}/meta/customs-declaration",
        status,
      );
  }
}
