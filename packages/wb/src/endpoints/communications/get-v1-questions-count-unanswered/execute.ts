// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1QuestionsCountUnansweredResponse } from "./contract.js";
import type { GetV1QuestionsCountUnansweredResponse } from "./types.js";

export const GET_V1_QUESTIONS_COUNT_UNANSWERED_OPERATION_ID =
  "getV1QuestionsCountUnanswered";

const definition: WbOperationDefinition<GetV1QuestionsCountUnansweredResponse> =
  {
    operationId: GET_V1_QUESTIONS_COUNT_UNANSWERED_OPERATION_ID,
    method: "GET",
    path: "/api/v1/questions/count-unanswered",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    parameters: [],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1QuestionsCountUnansweredResponse,
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1QuestionsCountUnanswered(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1QuestionsCountUnansweredResponse> {
  return execute(definition, undefined, options);
}
