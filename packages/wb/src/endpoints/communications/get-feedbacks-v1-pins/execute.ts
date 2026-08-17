// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetFeedbacksV1PinsResponse } from "./contract.js";
import type {
  GetFeedbacksV1PinsInput,
  GetFeedbacksV1PinsResponse,
} from "./types.js";

export const GET_FEEDBACKS_V1_PINS_OPERATION_ID = "getFeedbacksV1Pins";

const definition: WbOperationDefinition<GetFeedbacksV1PinsResponse> = {
  operationId: GET_FEEDBACKS_V1_PINS_OPERATION_ID,
  method: "GET",
  path: "/api/feedbacks/v1/pins",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  parameters: [
    { name: "state", location: "query", required: false, array: false },
    { name: "pinOn", location: "query", required: false, array: false },
    { name: "imtId", location: "query", required: false, array: false },
    { name: "nmId", location: "query", required: false, array: false },
    { name: "feedbackId", location: "query", required: false, array: false },
    { name: "dateFrom", location: "query", required: false, array: false },
    { name: "dateTo", location: "query", required: false, array: false },
    { name: "next", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetFeedbacksV1PinsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetFeedbacksV1Pins(
  execute: WbOperationExecutor,
  input?: GetFeedbacksV1PinsInput,
  options: WbRequestOptions = {},
): Promise<GetFeedbacksV1PinsResponse> {
  return execute(definition, input ?? {}, options);
}
