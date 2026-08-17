// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1OrderFeedResponse } from "./contract.js";
import type { PostV1OrderFeedInput, PostV1OrderFeedResponse } from "./types.js";

export const POST_V1_ORDER_FEED_OPERATION_ID = "postV1OrderFeed";

const definition: WbOperationDefinition<PostV1OrderFeedResponse> = {
  operationId: POST_V1_ORDER_FEED_OPERATION_ID,
  method: "POST",
  path: "/api/analytics/v1/order-feed",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1OrderFeedResponse,
  source: "https://dev.wildberries.ru/docs/openapi/analytics",
  verifiedAt: "2026-08-17",
};

export function executePostV1OrderFeed(
  execute: WbOperationExecutor,
  input?: PostV1OrderFeedInput,
  options: WbRequestOptions = {},
): Promise<PostV1OrderFeedResponse> {
  return execute(definition, input ?? {}, options);
}
