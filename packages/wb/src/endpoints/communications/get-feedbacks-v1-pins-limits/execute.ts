// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetFeedbacksV1PinsLimitsResponse } from "./contract.js";
import type { GetFeedbacksV1PinsLimitsResponse } from "./types.js";

export const GET_FEEDBACKS_V1_PINS_LIMITS_OPERATION_ID =
  "getFeedbacksV1PinsLimits";

const definition: WbOperationDefinition<GetFeedbacksV1PinsLimitsResponse> = {
  operationId: GET_FEEDBACKS_V1_PINS_LIMITS_OPERATION_ID,
  method: "GET",
  path: "/api/feedbacks/v1/pins/limits",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetFeedbacksV1PinsLimitsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetFeedbacksV1PinsLimits(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetFeedbacksV1PinsLimitsResponse> {
  return execute(definition, undefined, options);
}
