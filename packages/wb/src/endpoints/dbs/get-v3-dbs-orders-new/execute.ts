// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV3DbsOrdersNewResponse } from "./contract.js";
import type { GetV3DbsOrdersNewResponse } from "./types.js";

export const GET_V3_DBS_ORDERS_NEW_OPERATION_ID = "getV3DbsOrdersNew";

const definition: WbOperationDefinition<GetV3DbsOrdersNewResponse> = {
  operationId: GET_V3_DBS_ORDERS_NEW_OPERATION_ID,
  method: "GET",
  path: "/api/v3/dbs/orders/new",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV3DbsOrdersNewResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executeGetV3DbsOrdersNew(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV3DbsOrdersNewResponse> {
  return execute(definition, undefined, options);
}
