// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3OrdersNewResponse } from "./contract.js";
import type { GetApiV3OrdersNewResponse } from "./types.js";

export const GET_API_V3_ORDERS_NEW_OPERATION_ID = "GET /api/v3/orders/new";

const definition: WbOperationDefinition<GetApiV3OrdersNewResponse> = {
  operationId: GET_API_V3_ORDERS_NEW_OPERATION_ID,
  method: "GET",
  path: "/api/v3/orders/new",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV3OrdersNewResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV3OrdersNew(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetApiV3OrdersNewResponse> {
  return execute(definition, undefined, options);
}
