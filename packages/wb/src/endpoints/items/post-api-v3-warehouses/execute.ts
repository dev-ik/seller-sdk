// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV3WarehousesResponse } from "./contract.js";
import type {
  PostApiV3WarehousesInput,
  PostApiV3WarehousesResponse,
} from "./types.js";

export const POST_API_V3_WAREHOUSES_OPERATION_ID = "POST /api/v3/warehouses";

const definition: WbOperationDefinition<PostApiV3WarehousesResponse> = {
  operationId: POST_API_V3_WAREHOUSES_OPERATION_ID,
  method: "POST",
  path: "/api/v3/warehouses",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostApiV3WarehousesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostApiV3Warehouses(
  execute: WbOperationExecutor,
  input: PostApiV3WarehousesInput,
  options: WbRequestOptions = {},
): Promise<PostApiV3WarehousesResponse> {
  return execute(definition, input, options);
}
