// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV3OrdersClientResponse } from "./contract.js";
import type {
  PostApiV3OrdersClientInput,
  PostApiV3OrdersClientResponse,
} from "./types.js";

export const POST_API_V3_ORDERS_CLIENT_OPERATION_ID =
  "POST /api/v3/orders/client";

const definition: WbOperationDefinition<PostApiV3OrdersClientResponse> = {
  operationId: POST_API_V3_ORDERS_CLIENT_OPERATION_ID,
  method: "POST",
  path: "/api/v3/orders/client",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostApiV3OrdersClientResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executePostApiV3OrdersClient(
  execute: WbOperationExecutor,
  input: PostApiV3OrdersClientInput,
  options: WbRequestOptions = {},
): Promise<PostApiV3OrdersClientResponse> {
  return execute(definition, input, options);
}
