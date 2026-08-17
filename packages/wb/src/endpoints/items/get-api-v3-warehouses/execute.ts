// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3WarehousesResponse } from "./contract.js";
import type { GetApiV3WarehousesResponse } from "./types.js";

export const GET_API_V3_WAREHOUSES_OPERATION_ID = "GET /api/v3/warehouses";

const definition: WbOperationDefinition<GetApiV3WarehousesResponse> = {
  operationId: GET_API_V3_WAREHOUSES_OPERATION_ID,
  method: "GET",
  path: "/api/v3/warehouses",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV3WarehousesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV3Warehouses(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetApiV3WarehousesResponse> {
  return execute(definition, undefined, options);
}
