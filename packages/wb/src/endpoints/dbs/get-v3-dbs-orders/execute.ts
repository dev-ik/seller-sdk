// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV3DbsOrdersResponse } from "./contract.js";
import type { GetV3DbsOrdersInput, GetV3DbsOrdersResponse } from "./types.js";

export const GET_V3_DBS_ORDERS_OPERATION_ID = "getV3DbsOrders";

const definition: WbOperationDefinition<GetV3DbsOrdersResponse> = {
  operationId: GET_V3_DBS_ORDERS_OPERATION_ID,
  method: "GET",
  path: "/api/v3/dbs/orders",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: true, array: false },
    { name: "next", location: "query", required: true, array: false },
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV3DbsOrdersResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executeGetV3DbsOrders(
  execute: WbOperationExecutor,
  input: GetV3DbsOrdersInput,
  options: WbRequestOptions = {},
): Promise<GetV3DbsOrdersResponse> {
  return execute(definition, input, options);
}
