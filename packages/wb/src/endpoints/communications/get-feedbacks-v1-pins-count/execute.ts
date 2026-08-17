// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetFeedbacksV1PinsCountResponse } from "./contract.js";
import type {
  GetFeedbacksV1PinsCountInput,
  GetFeedbacksV1PinsCountResponse,
} from "./types.js";

export const GET_FEEDBACKS_V1_PINS_COUNT_OPERATION_ID =
  "getFeedbacksV1PinsCount";

const definition: WbOperationDefinition<GetFeedbacksV1PinsCountResponse> = {
  operationId: GET_FEEDBACKS_V1_PINS_COUNT_OPERATION_ID,
  method: "GET",
  path: "/api/feedbacks/v1/pins/count",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  parameters: [
    { name: "state", location: "query", required: false, array: false },
    { name: "pinOn", location: "query", required: false, array: false },
    { name: "imtId", location: "query", required: false, array: false },
    { name: "nmId", location: "query", required: false, array: false },
    { name: "feedbackId", location: "query", required: false, array: false },
    { name: "dateFrom", location: "query", required: false, array: false },
    { name: "dateTo", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetFeedbacksV1PinsCountResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetFeedbacksV1PinsCount(
  execute: WbOperationExecutor,
  input?: GetFeedbacksV1PinsCountInput,
  options: WbRequestOptions = {},
): Promise<GetFeedbacksV1PinsCountResponse> {
  return execute(definition, input ?? {}, options);
}
