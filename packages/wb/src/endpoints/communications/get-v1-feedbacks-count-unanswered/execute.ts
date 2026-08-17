// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1FeedbacksCountUnansweredResponse } from "./contract.js";
import type { GetV1FeedbacksCountUnansweredResponse } from "./types.js";

export const GET_V1_FEEDBACKS_COUNT_UNANSWERED_OPERATION_ID =
  "getV1FeedbacksCountUnanswered";

const definition: WbOperationDefinition<GetV1FeedbacksCountUnansweredResponse> =
  {
    operationId: GET_V1_FEEDBACKS_COUNT_UNANSWERED_OPERATION_ID,
    method: "GET",
    path: "/api/v1/feedbacks/count-unanswered",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    parameters: [],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1FeedbacksCountUnansweredResponse,
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1FeedbacksCountUnanswered(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1FeedbacksCountUnansweredResponse> {
  return execute(definition, undefined, options);
}
