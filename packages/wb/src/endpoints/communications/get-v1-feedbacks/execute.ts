// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1FeedbacksResponse } from "./contract.js";
import type { GetV1FeedbacksInput, GetV1FeedbacksResponse } from "./types.js";

export const GET_V1_FEEDBACKS_OPERATION_ID = "getV1Feedbacks";

const definition: WbOperationDefinition<GetV1FeedbacksResponse> = {
  operationId: GET_V1_FEEDBACKS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/feedbacks",
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
  parseResponse: parseGetV1FeedbacksResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Feedbacks(
  execute: WbOperationExecutor,
  input: GetV1FeedbacksInput,
  options: WbRequestOptions = {},
): Promise<GetV1FeedbacksResponse> {
  return execute(definition, input, options);
}
