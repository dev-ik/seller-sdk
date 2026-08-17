// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1WarehousesResponse } from "./contract.js";
import type { GetV1WarehousesResponse } from "./types.js";

export const GET_V1_WAREHOUSES_OPERATION_ID = "getV1Warehouses";

const definition: WbOperationDefinition<GetV1WarehousesResponse> = {
  operationId: GET_V1_WAREHOUSES_OPERATION_ID,
  method: "GET",
  path: "/api/v1/warehouses",
  productionOrigin: "https://supplies-api.wildberries.ru",
  sandboxOrigin: "https://supplies-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1WarehousesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Warehouses(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1WarehousesResponse> {
  return execute(definition, undefined, options);
}
