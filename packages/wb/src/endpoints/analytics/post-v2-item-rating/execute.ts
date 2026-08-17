// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2ItemRatingResponse } from "./contract.js";
import type {
  PostV2ItemRatingInput,
  PostV2ItemRatingResponse,
} from "./types.js";

export const POST_V2_ITEM_RATING_OPERATION_ID = "postV2ItemRating";

const definition: WbOperationDefinition<PostV2ItemRatingResponse> = {
  operationId: POST_V2_ITEM_RATING_OPERATION_ID,
  method: "POST",
  path: "/api/analytics/v2/item-rating",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV2ItemRatingResponse,
  source: "https://dev.wildberries.ru/docs/openapi/analytics",
  verifiedAt: "2026-08-17",
};

export function executePostV2ItemRating(
  execute: WbOperationExecutor,
  input: PostV2ItemRatingInput,
  options: WbRequestOptions = {},
): Promise<PostV2ItemRatingResponse> {
  return execute(definition, input, options);
}
