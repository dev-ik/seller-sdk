// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1NewFeedbacksQuestionsResponse } from "./contract.js";
import type { GetV1NewFeedbacksQuestionsResponse } from "./types.js";

export const GET_V1_NEW_FEEDBACKS_QUESTIONS_OPERATION_ID =
  "getV1NewFeedbacksQuestions";

const definition: WbOperationDefinition<GetV1NewFeedbacksQuestionsResponse> = {
  operationId: GET_V1_NEW_FEEDBACKS_QUESTIONS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/new-feedbacks-questions",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1NewFeedbacksQuestionsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1NewFeedbacksQuestions(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1NewFeedbacksQuestionsResponse> {
  return execute(definition, undefined, options);
}
