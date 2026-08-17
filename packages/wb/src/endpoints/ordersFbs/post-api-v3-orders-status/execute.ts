// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV3OrdersStatusResponse } from "./contract.js";
import type {
  PostApiV3OrdersStatusInput,
  PostApiV3OrdersStatusResponse,
} from "./types.js";

export const POST_API_V3_ORDERS_STATUS_OPERATION_ID =
  "POST /api/v3/orders/status";

const definition: WbOperationDefinition<PostApiV3OrdersStatusResponse> = {
  operationId: POST_API_V3_ORDERS_STATUS_OPERATION_ID,
  method: "POST",
  path: "/api/v3/orders/status",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostApiV3OrdersStatusResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executePostApiV3OrdersStatus(
  execute: WbOperationExecutor,
  input?: PostApiV3OrdersStatusInput,
  options: WbRequestOptions = {},
): Promise<PostApiV3OrdersStatusResponse> {
  return execute(definition, input ?? {}, options);
}
