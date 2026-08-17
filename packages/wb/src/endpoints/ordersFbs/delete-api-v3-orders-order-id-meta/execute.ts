// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseDeleteApiV3OrdersOrderIdMetaResponse } from "./contract.js";
import type {
  DeleteApiV3OrdersOrderIdMetaInput,
  DeleteApiV3OrdersOrderIdMetaResponse,
} from "./types.js";

export const DELETE_API_V3_ORDERS_ORDER_ID_META_OPERATION_ID =
  "DELETE /api/v3/orders/{orderId}/meta";

const definition: WbOperationDefinition<DeleteApiV3OrdersOrderIdMetaResponse> =
  {
    operationId: DELETE_API_V3_ORDERS_ORDER_ID_META_OPERATION_ID,
    method: "DELETE",
    path: "/api/v3/orders/{orderId}/meta",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "orderId", location: "path", required: true, array: false },
      { name: "key", location: "query", required: true, array: false },
    ],
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseDeleteApiV3OrdersOrderIdMetaResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executeDeleteApiV3OrdersOrderIdMeta(
  execute: WbOperationExecutor,
  input: DeleteApiV3OrdersOrderIdMetaInput,
  options: WbRequestOptions = {},
): Promise<DeleteApiV3OrdersOrderIdMetaResponse> {
  return execute(definition, input, options);
}
