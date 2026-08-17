// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1FeedbacksAnswerResponse } from "./contract.js";
import type {
  PostV1FeedbacksAnswerInput,
  PostV1FeedbacksAnswerResponse,
} from "./types.js";

export const POST_V1_FEEDBACKS_ANSWER_OPERATION_ID = "postV1FeedbacksAnswer";

const definition: WbOperationDefinition<PostV1FeedbacksAnswerResponse> = {
  operationId: POST_V1_FEEDBACKS_ANSWER_OPERATION_ID,
  method: "POST",
  path: "/api/v1/feedbacks/answer",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1FeedbacksAnswerResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executePostV1FeedbacksAnswer(
  execute: WbOperationExecutor,
  input?: PostV1FeedbacksAnswerInput,
  options: WbRequestOptions = {},
): Promise<PostV1FeedbacksAnswerResponse> {
  return execute(definition, input ?? {}, options);
}
