// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1QuestionsCountResponse } from "./contract.js";
import type {
  GetV1QuestionsCountInput,
  GetV1QuestionsCountResponse,
} from "./types.js";

export const GET_V1_QUESTIONS_COUNT_OPERATION_ID = "getV1QuestionsCount";

const definition: WbOperationDefinition<GetV1QuestionsCountResponse> = {
  operationId: GET_V1_QUESTIONS_COUNT_OPERATION_ID,
  method: "GET",
  path: "/api/v1/questions/count",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: false, array: false },
    { name: "dateTo", location: "query", required: false, array: false },
    { name: "isAnswered", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1QuestionsCountResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1QuestionsCount(
  execute: WbOperationExecutor,
  input?: GetV1QuestionsCountInput,
  options: WbRequestOptions = {},
): Promise<GetV1QuestionsCountResponse> {
  return execute(definition, input ?? {}, options);
}
