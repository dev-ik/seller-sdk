// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostFeedbacksV1PinsResponse } from "./contract.js";
import type {
  PostFeedbacksV1PinsInput,
  PostFeedbacksV1PinsResponse,
} from "./types.js";

export const POST_FEEDBACKS_V1_PINS_OPERATION_ID = "postFeedbacksV1Pins";

const definition: WbOperationDefinition<PostFeedbacksV1PinsResponse> = {
  operationId: POST_FEEDBACKS_V1_PINS_OPERATION_ID,
  method: "POST",
  path: "/api/feedbacks/v1/pins",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostFeedbacksV1PinsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executePostFeedbacksV1Pins(
  execute: WbOperationExecutor,
  input: PostFeedbacksV1PinsInput,
  options: WbRequestOptions = {},
): Promise<PostFeedbacksV1PinsResponse> {
  return execute(definition, input, options);
}
