// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutV3DbwOrdersOrderIdMetaUinResponse } from "./contract.js";
import type {
  PutV3DbwOrdersOrderIdMetaUinInput,
  PutV3DbwOrdersOrderIdMetaUinResponse,
} from "./types.js";

export const PUT_V3_DBW_ORDERS_ORDER_ID_META_UIN_OPERATION_ID =
  "putV3DbwOrdersOrderIdMetaUin";

const definition: WbOperationDefinition<PutV3DbwOrdersOrderIdMetaUinResponse> =
  {
    operationId: PUT_V3_DBW_ORDERS_ORDER_ID_META_UIN_OPERATION_ID,
    method: "PUT",
    path: "/api/v3/dbw/orders/{orderId}/meta/uin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [
      { name: "orderId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePutV3DbwOrdersOrderIdMetaUinResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  };

export function executePutV3DbwOrdersOrderIdMetaUin(
  execute: WbOperationExecutor,
  input: PutV3DbwOrdersOrderIdMetaUinInput,
  options: WbRequestOptions = {},
): Promise<PutV3DbwOrdersOrderIdMetaUinResponse> {
  return execute(definition, input, options);
}
