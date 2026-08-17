// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersStatusConfirmResponse } from "./contract.js";
import type {
  PostV3DbsOrdersStatusConfirmInput,
  PostV3DbsOrdersStatusConfirmResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_STATUS_CONFIRM_OPERATION_ID =
  "postV3DbsOrdersStatusConfirm";

const definition: WbOperationDefinition<PostV3DbsOrdersStatusConfirmResponse> =
  {
    operationId: POST_V3_DBS_ORDERS_STATUS_CONFIRM_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/status/confirm",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3DbsOrdersStatusConfirmResponse,
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  };

export function executePostV3DbsOrdersStatusConfirm(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersStatusConfirmInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersStatusConfirmResponse> {
  return execute(definition, input, options);
}
