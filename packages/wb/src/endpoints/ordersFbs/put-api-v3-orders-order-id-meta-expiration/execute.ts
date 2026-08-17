// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutApiV3OrdersOrderIdMetaExpirationResponse } from "./contract.js";
import type {
  PutApiV3OrdersOrderIdMetaExpirationInput,
  PutApiV3OrdersOrderIdMetaExpirationResponse,
} from "./types.js";

export const PUT_API_V3_ORDERS_ORDER_ID_META_EXPIRATION_OPERATION_ID =
  "PUT /api/v3/orders/{orderId}/meta/expiration";

const definition: WbOperationDefinition<PutApiV3OrdersOrderIdMetaExpirationResponse> =
  {
    operationId: PUT_API_V3_ORDERS_ORDER_ID_META_EXPIRATION_OPERATION_ID,
    method: "PUT",
    path: "/api/v3/orders/{orderId}/meta/expiration",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "orderId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePutApiV3OrdersOrderIdMetaExpirationResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePutApiV3OrdersOrderIdMetaExpiration(
  execute: WbOperationExecutor,
  input: PutApiV3OrdersOrderIdMetaExpirationInput,
  options: WbRequestOptions = {},
): Promise<PutApiV3OrdersOrderIdMetaExpirationResponse> {
  return execute(definition, input, options);
}
