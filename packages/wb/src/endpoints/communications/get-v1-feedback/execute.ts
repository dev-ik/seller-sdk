// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1FeedbackResponse } from "./contract.js";
import type { GetV1FeedbackInput, GetV1FeedbackResponse } from "./types.js";

export const GET_V1_FEEDBACK_OPERATION_ID = "getV1Feedback";

const definition: WbOperationDefinition<GetV1FeedbackResponse> = {
  operationId: GET_V1_FEEDBACK_OPERATION_ID,
  method: "GET",
  path: "/api/v1/feedback",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
  parameters: [{ name: "id", location: "query", required: true, array: false }],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1FeedbackResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Feedback(
  execute: WbOperationExecutor,
  input: GetV1FeedbackInput,
  options: WbRequestOptions = {},
): Promise<GetV1FeedbackResponse> {
  return execute(definition, input, options);
}
