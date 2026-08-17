// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV3DbwOrdersResponse } from "./contract.js";
import type { GetV3DbwOrdersInput, GetV3DbwOrdersResponse } from "./types.js";

export const GET_V3_DBW_ORDERS_OPERATION_ID = "getV3DbwOrders";

const definition: WbOperationDefinition<GetV3DbwOrdersResponse> = {
  operationId: GET_V3_DBW_ORDERS_OPERATION_ID,
  method: "GET",
  path: "/api/v3/dbw/orders",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: true, array: false },
    { name: "next", location: "query", required: true, array: false },
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV3DbwOrdersResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
  verifiedAt: "2026-08-17",
};

export function executeGetV3DbwOrders(
  execute: WbOperationExecutor,
  input: GetV3DbwOrdersInput,
  options: WbRequestOptions = {},
): Promise<GetV3DbwOrdersResponse> {
  return execute(definition, input, options);
}
