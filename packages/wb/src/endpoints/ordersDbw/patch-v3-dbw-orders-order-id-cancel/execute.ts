// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchV3DbwOrdersOrderIdCancelResponse } from "./contract.js";
import type {
  PatchV3DbwOrdersOrderIdCancelInput,
  PatchV3DbwOrdersOrderIdCancelResponse,
} from "./types.js";

export const PATCH_V3_DBW_ORDERS_ORDER_ID_CANCEL_OPERATION_ID =
  "patchV3DbwOrdersOrderIdCancel";

const definition: WbOperationDefinition<PatchV3DbwOrdersOrderIdCancelResponse> =
  {
    operationId: PATCH_V3_DBW_ORDERS_ORDER_ID_CANCEL_OPERATION_ID,
    method: "PATCH",
    path: "/api/v3/dbw/orders/{orderId}/cancel",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [
      { name: "orderId", location: "path", required: true, array: false },
    ],
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePatchV3DbwOrdersOrderIdCancelResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  };

export function executePatchV3DbwOrdersOrderIdCancel(
  execute: WbOperationExecutor,
  input: PatchV3DbwOrdersOrderIdCancelInput,
  options: WbRequestOptions = {},
): Promise<PatchV3DbwOrdersOrderIdCancelResponse> {
  return execute(definition, input, options);
}
