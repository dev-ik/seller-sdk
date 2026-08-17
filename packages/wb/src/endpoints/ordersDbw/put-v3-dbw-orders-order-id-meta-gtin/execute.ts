// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutV3DbwOrdersOrderIdMetaGtinResponse } from "./contract.js";
import type {
  PutV3DbwOrdersOrderIdMetaGtinInput,
  PutV3DbwOrdersOrderIdMetaGtinResponse,
} from "./types.js";

export const PUT_V3_DBW_ORDERS_ORDER_ID_META_GTIN_OPERATION_ID =
  "putV3DbwOrdersOrderIdMetaGtin";

const definition: WbOperationDefinition<PutV3DbwOrdersOrderIdMetaGtinResponse> =
  {
    operationId: PUT_V3_DBW_ORDERS_ORDER_ID_META_GTIN_OPERATION_ID,
    method: "PUT",
    path: "/api/v3/dbw/orders/{orderId}/meta/gtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [
      { name: "orderId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePutV3DbwOrdersOrderIdMetaGtinResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  };

export function executePutV3DbwOrdersOrderIdMetaGtin(
  execute: WbOperationExecutor,
  input: PutV3DbwOrdersOrderIdMetaGtinInput,
  options: WbRequestOptions = {},
): Promise<PutV3DbwOrdersOrderIdMetaGtinResponse> {
  return execute(definition, input, options);
}
