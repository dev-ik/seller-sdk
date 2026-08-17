// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1RecommendationsSetResponse } from "./contract.js";
import type {
  PostV1RecommendationsSetInput,
  PostV1RecommendationsSetResponse,
} from "./types.js";

export const POST_V1_RECOMMENDATIONS_SET_OPERATION_ID =
  "postV1RecommendationsSet";

const definition: WbOperationDefinition<PostV1RecommendationsSetResponse> = {
  operationId: POST_V1_RECOMMENDATIONS_SET_OPERATION_ID,
  method: "POST",
  path: "/api/content/v1/recommendations/set",
  productionOrigin: "https://content-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1RecommendationsSetResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostV1RecommendationsSet(
  execute: WbOperationExecutor,
  input: PostV1RecommendationsSetInput,
  options: WbRequestOptions = {},
): Promise<PostV1RecommendationsSetResponse> {
  return execute(definition, input, options);
}
