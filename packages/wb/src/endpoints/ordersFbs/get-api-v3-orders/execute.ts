// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3OrdersResponse } from "./contract.js";
import type { GetApiV3OrdersInput, GetApiV3OrdersResponse } from "./types.js";

export const GET_API_V3_ORDERS_OPERATION_ID = "GET /api/v3/orders";

const definition: WbOperationDefinition<GetApiV3OrdersResponse> = {
  operationId: GET_API_V3_ORDERS_OPERATION_ID,
  method: "GET",
  path: "/api/v3/orders",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: true, array: false },
    { name: "next", location: "query", required: true, array: false },
    { name: "dateFrom", location: "query", required: false, array: false },
    { name: "dateTo", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV3OrdersResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV3Orders(
  execute: WbOperationExecutor,
  input: GetApiV3OrdersInput,
  options: WbRequestOptions = {},
): Promise<GetApiV3OrdersResponse> {
  return execute(definition, input, options);
}
