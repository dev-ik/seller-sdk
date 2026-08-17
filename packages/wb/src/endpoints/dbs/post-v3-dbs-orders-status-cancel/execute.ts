// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersStatusCancelResponse } from "./contract.js";
import type {
  PostV3DbsOrdersStatusCancelInput,
  PostV3DbsOrdersStatusCancelResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_STATUS_CANCEL_OPERATION_ID =
  "postV3DbsOrdersStatusCancel";

const definition: WbOperationDefinition<PostV3DbsOrdersStatusCancelResponse> = {
  operationId: POST_V3_DBS_ORDERS_STATUS_CANCEL_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/status/cancel",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersStatusCancelResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersStatusCancel(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersStatusCancelInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersStatusCancelResponse> {
  return execute(definition, input, options);
}
