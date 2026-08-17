// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV3DbwOrdersNewResponse } from "./contract.js";
import type { GetV3DbwOrdersNewResponse } from "./types.js";

export const GET_V3_DBW_ORDERS_NEW_OPERATION_ID = "getV3DbwOrdersNew";

const definition: WbOperationDefinition<GetV3DbwOrdersNewResponse> = {
  operationId: GET_V3_DBW_ORDERS_NEW_OPERATION_ID,
  method: "GET",
  path: "/api/v3/dbw/orders/new",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV3DbwOrdersNewResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
  verifiedAt: "2026-08-17",
};

export function executeGetV3DbwOrdersNew(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV3DbwOrdersNewResponse> {
  return execute(definition, undefined, options);
}
