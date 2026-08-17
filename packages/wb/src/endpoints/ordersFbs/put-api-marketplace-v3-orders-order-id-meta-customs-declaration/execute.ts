// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse } from "./contract.js";
import type {
  PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationInput,
  PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse,
} from "./types.js";

export const PUT_API_MARKETPLACE_V3_ORDERS_ORDER_ID_META_CUSTOMS_DECLARATION_OPERATION_ID =
  "PUT /api/marketplace/v3/orders/{orderId}/meta/customs-declaration";

const definition: WbOperationDefinition<PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse> =
  {
    operationId:
      PUT_API_MARKETPLACE_V3_ORDERS_ORDER_ID_META_CUSTOMS_DECLARATION_OPERATION_ID,
    method: "PUT",
    path: "/api/marketplace/v3/orders/{orderId}/meta/customs-declaration",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "orderId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse:
      parsePutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclaration(
  execute: WbOperationExecutor,
  input: PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationInput,
  options: WbRequestOptions = {},
): Promise<PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse> {
  return execute(definition, input, options);
}
