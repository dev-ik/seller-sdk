// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1QuestionsResponse } from "./contract.js";
import type { GetV1QuestionsInput, GetV1QuestionsResponse } from "./types.js";

export const GET_V1_QUESTIONS_OPERATION_ID = "getV1Questions";

const definition: WbOperationDefinition<GetV1QuestionsResponse> = {
  operationId: GET_V1_QUESTIONS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/questions",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
  parameters: [
    { name: "isAnswered", location: "query", required: true, array: false },
    { name: "nmId", location: "query", required: false, array: false },
    { name: "take", location: "query", required: true, array: false },
    { name: "skip", location: "query", required: true, array: false },
    { name: "order", location: "query", required: false, array: false },
    { name: "dateFrom", location: "query", required: false, array: false },
    { name: "dateTo", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1QuestionsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Questions(
  execute: WbOperationExecutor,
  input: GetV1QuestionsInput,
  options: WbRequestOptions = {},
): Promise<GetV1QuestionsResponse> {
  return execute(definition, input, options);
}
