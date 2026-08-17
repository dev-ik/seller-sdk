// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1QuestionResponse } from "./contract.js";
import type { GetV1QuestionInput, GetV1QuestionResponse } from "./types.js";

export const GET_V1_QUESTION_OPERATION_ID = "getV1Question";

const definition: WbOperationDefinition<GetV1QuestionResponse> = {
  operationId: GET_V1_QUESTION_OPERATION_ID,
  method: "GET",
  path: "/api/v1/question",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
  parameters: [{ name: "id", location: "query", required: true, array: false }],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1QuestionResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Question(
  execute: WbOperationExecutor,
  input: GetV1QuestionInput,
  options: WbRequestOptions = {},
): Promise<GetV1QuestionResponse> {
  return execute(definition, input, options);
}
