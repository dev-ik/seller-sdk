// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV3OrdersStatusHistoryResponse } from "./contract.js";
import type {
  PostApiV3OrdersStatusHistoryInput,
  PostApiV3OrdersStatusHistoryResponse,
} from "./types.js";

export const POST_API_V3_ORDERS_STATUS_HISTORY_OPERATION_ID =
  "POST /api/v3/orders/status/history";

const definition: WbOperationDefinition<PostApiV3OrdersStatusHistoryResponse> =
  {
    operationId: POST_API_V3_ORDERS_STATUS_HISTORY_OPERATION_ID,
    method: "POST",
    path: "/api/v3/orders/status/history",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostApiV3OrdersStatusHistoryResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePostApiV3OrdersStatusHistory(
  execute: WbOperationExecutor,
  input?: PostApiV3OrdersStatusHistoryInput,
  options: WbRequestOptions = {},
): Promise<PostApiV3OrdersStatusHistoryResponse> {
  return execute(definition, input ?? {}, options);
}
