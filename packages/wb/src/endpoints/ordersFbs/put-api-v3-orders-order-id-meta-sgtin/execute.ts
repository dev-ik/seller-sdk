// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutApiV3OrdersOrderIdMetaSgtinResponse } from "./contract.js";
import type {
  PutApiV3OrdersOrderIdMetaSgtinInput,
  PutApiV3OrdersOrderIdMetaSgtinResponse,
} from "./types.js";

export const PUT_API_V3_ORDERS_ORDER_ID_META_SGTIN_OPERATION_ID =
  "PUT /api/v3/orders/{orderId}/meta/sgtin";

const definition: WbOperationDefinition<PutApiV3OrdersOrderIdMetaSgtinResponse> =
  {
    operationId: PUT_API_V3_ORDERS_ORDER_ID_META_SGTIN_OPERATION_ID,
    method: "PUT",
    path: "/api/v3/orders/{orderId}/meta/sgtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "orderId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePutApiV3OrdersOrderIdMetaSgtinResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePutApiV3OrdersOrderIdMetaSgtin(
  execute: WbOperationExecutor,
  input: PutApiV3OrdersOrderIdMetaSgtinInput,
  options: WbRequestOptions = {},
): Promise<PutApiV3OrdersOrderIdMetaSgtinResponse> {
  return execute(definition, input, options);
}
