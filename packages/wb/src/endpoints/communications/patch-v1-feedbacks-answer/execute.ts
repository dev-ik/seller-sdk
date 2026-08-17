// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchV1FeedbacksAnswerResponse } from "./contract.js";
import type {
  PatchV1FeedbacksAnswerInput,
  PatchV1FeedbacksAnswerResponse,
} from "./types.js";

export const PATCH_V1_FEEDBACKS_ANSWER_OPERATION_ID = "patchV1FeedbacksAnswer";

const definition: WbOperationDefinition<PatchV1FeedbacksAnswerResponse> = {
  operationId: PATCH_V1_FEEDBACKS_ANSWER_OPERATION_ID,
  method: "PATCH",
  path: "/api/v1/feedbacks/answer",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePatchV1FeedbacksAnswerResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executePatchV1FeedbacksAnswer(
  execute: WbOperationExecutor,
  input?: PatchV1FeedbacksAnswerInput,
  options: WbRequestOptions = {},
): Promise<PatchV1FeedbacksAnswerResponse> {
  return execute(definition, input ?? {}, options);
}
