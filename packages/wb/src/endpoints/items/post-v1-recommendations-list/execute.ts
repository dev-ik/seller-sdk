// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1RecommendationsListResponse } from "./contract.js";
import type {
  PostV1RecommendationsListInput,
  PostV1RecommendationsListResponse,
} from "./types.js";

export const POST_V1_RECOMMENDATIONS_LIST_OPERATION_ID =
  "postV1RecommendationsList";

const definition: WbOperationDefinition<PostV1RecommendationsListResponse> = {
  operationId: POST_V1_RECOMMENDATIONS_LIST_OPERATION_ID,
  method: "POST",
  path: "/api/content/v1/recommendations/list",
  productionOrigin: "https://content-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1RecommendationsListResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostV1RecommendationsList(
  execute: WbOperationExecutor,
  input?: PostV1RecommendationsListInput,
  options: WbRequestOptions = {},
): Promise<PostV1RecommendationsListResponse> {
  return execute(definition, input ?? {}, options);
}
