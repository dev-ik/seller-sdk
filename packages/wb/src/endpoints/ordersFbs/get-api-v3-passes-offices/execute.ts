// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3PassesOfficesResponse } from "./contract.js";
import type { GetApiV3PassesOfficesResponse } from "./types.js";

export const GET_API_V3_PASSES_OFFICES_OPERATION_ID =
  "GET /api/v3/passes/offices";

const definition: WbOperationDefinition<GetApiV3PassesOfficesResponse> = {
  operationId: GET_API_V3_PASSES_OFFICES_OPERATION_ID,
  method: "GET",
  path: "/api/v3/passes/offices",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV3PassesOfficesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV3PassesOffices(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetApiV3PassesOfficesResponse> {
  return execute(definition, undefined, options);
}
