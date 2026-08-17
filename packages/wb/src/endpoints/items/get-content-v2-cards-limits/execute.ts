// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2CardsLimitsResponse } from "./contract.js";
import type { GetContentV2CardsLimitsResponse } from "./types.js";

export const GET_CONTENT_V2_CARDS_LIMITS_OPERATION_ID =
  "GET /content/v2/cards/limits";

const definition: WbOperationDefinition<GetContentV2CardsLimitsResponse> = {
  operationId: GET_CONTENT_V2_CARDS_LIMITS_OPERATION_ID,
  method: "GET",
  path: "/content/v2/cards/limits",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetContentV2CardsLimitsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetContentV2CardsLimits(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetContentV2CardsLimitsResponse> {
  return execute(definition, undefined, options);
}
