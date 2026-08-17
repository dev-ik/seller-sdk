// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3PassesResponse } from "./contract.js";
import type { GetApiV3PassesResponse } from "./types.js";

export const GET_API_V3_PASSES_OPERATION_ID = "GET /api/v3/passes";

const definition: WbOperationDefinition<GetApiV3PassesResponse> = {
  operationId: GET_API_V3_PASSES_OPERATION_ID,
  method: "GET",
  path: "/api/v3/passes",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV3PassesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV3Passes(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetApiV3PassesResponse> {
  return execute(definition, undefined, options);
}
