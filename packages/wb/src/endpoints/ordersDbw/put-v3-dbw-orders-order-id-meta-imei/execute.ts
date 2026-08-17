// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutV3DbwOrdersOrderIdMetaImeiResponse } from "./contract.js";
import type {
  PutV3DbwOrdersOrderIdMetaImeiInput,
  PutV3DbwOrdersOrderIdMetaImeiResponse,
} from "./types.js";

export const PUT_V3_DBW_ORDERS_ORDER_ID_META_IMEI_OPERATION_ID =
  "putV3DbwOrdersOrderIdMetaImei";

const definition: WbOperationDefinition<PutV3DbwOrdersOrderIdMetaImeiResponse> =
  {
    operationId: PUT_V3_DBW_ORDERS_ORDER_ID_META_IMEI_OPERATION_ID,
    method: "PUT",
    path: "/api/v3/dbw/orders/{orderId}/meta/imei",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [
      { name: "orderId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePutV3DbwOrdersOrderIdMetaImeiResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  };

export function executePutV3DbwOrdersOrderIdMetaImei(
  execute: WbOperationExecutor,
  input: PutV3DbwOrdersOrderIdMetaImeiInput,
  options: WbRequestOptions = {},
): Promise<PutV3DbwOrdersOrderIdMetaImeiResponse> {
  return execute(definition, input, options);
}
