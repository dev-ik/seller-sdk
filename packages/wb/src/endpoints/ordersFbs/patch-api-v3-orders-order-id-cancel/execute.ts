// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchApiV3OrdersOrderIdCancelResponse } from "./contract.js";
import type {
  PatchApiV3OrdersOrderIdCancelInput,
  PatchApiV3OrdersOrderIdCancelResponse,
} from "./types.js";

export const PATCH_API_V3_ORDERS_ORDER_ID_CANCEL_OPERATION_ID =
  "PATCH /api/v3/orders/{orderId}/cancel";

const definition: WbOperationDefinition<PatchApiV3OrdersOrderIdCancelResponse> =
  {
    operationId: PATCH_API_V3_ORDERS_ORDER_ID_CANCEL_OPERATION_ID,
    method: "PATCH",
    path: "/api/v3/orders/{orderId}/cancel",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "orderId", location: "path", required: true, array: false },
    ],
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePatchApiV3OrdersOrderIdCancelResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePatchApiV3OrdersOrderIdCancel(
  execute: WbOperationExecutor,
  input: PatchApiV3OrdersOrderIdCancelInput,
  options: WbRequestOptions = {},
): Promise<PatchApiV3OrdersOrderIdCancelResponse> {
  return execute(definition, input, options);
}
