// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3OfficesResponse } from "./contract.js";
import type { GetApiV3OfficesResponse } from "./types.js";

export const GET_API_V3_OFFICES_OPERATION_ID = "GET /api/v3/offices";

const definition: WbOperationDefinition<GetApiV3OfficesResponse> = {
  operationId: GET_API_V3_OFFICES_OPERATION_ID,
  method: "GET",
  path: "/api/v3/offices",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV3OfficesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV3Offices(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetApiV3OfficesResponse> {
  return execute(definition, undefined, options);
}
