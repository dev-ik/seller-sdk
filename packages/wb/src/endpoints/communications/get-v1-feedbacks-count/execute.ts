// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1FeedbacksCountResponse } from "./contract.js";
import type {
  GetV1FeedbacksCountInput,
  GetV1FeedbacksCountResponse,
} from "./types.js";

export const GET_V1_FEEDBACKS_COUNT_OPERATION_ID = "getV1FeedbacksCount";

const definition: WbOperationDefinition<GetV1FeedbacksCountResponse> = {
  operationId: GET_V1_FEEDBACKS_COUNT_OPERATION_ID,
  method: "GET",
  path: "/api/v1/feedbacks/count",
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
  parseResponse: parseGetV1FeedbacksCountResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1FeedbacksCount(
  execute: WbOperationExecutor,
  input?: GetV1FeedbacksCountInput,
  options: WbRequestOptions = {},
): Promise<GetV1FeedbacksCountResponse> {
  return execute(definition, input ?? {}, options);
}
