// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchV3DbwOrdersOrderIdConfirmResponse } from "./contract.js";
import type {
  PatchV3DbwOrdersOrderIdConfirmInput,
  PatchV3DbwOrdersOrderIdConfirmResponse,
} from "./types.js";

export const PATCH_V3_DBW_ORDERS_ORDER_ID_CONFIRM_OPERATION_ID =
  "patchV3DbwOrdersOrderIdConfirm";

const definition: WbOperationDefinition<PatchV3DbwOrdersOrderIdConfirmResponse> =
  {
    operationId: PATCH_V3_DBW_ORDERS_ORDER_ID_CONFIRM_OPERATION_ID,
    method: "PATCH",
    path: "/api/v3/dbw/orders/{orderId}/confirm",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [
      { name: "orderId", location: "path", required: true, array: false },
    ],
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePatchV3DbwOrdersOrderIdConfirmResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  };

export function executePatchV3DbwOrdersOrderIdConfirm(
  execute: WbOperationExecutor,
  input: PatchV3DbwOrdersOrderIdConfirmInput,
  options: WbRequestOptions = {},
): Promise<PatchV3DbwOrdersOrderIdConfirmResponse> {
  return execute(definition, input, options);
}
