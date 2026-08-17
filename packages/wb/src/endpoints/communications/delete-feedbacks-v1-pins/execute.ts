// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseDeleteFeedbacksV1PinsResponse } from "./contract.js";
import type {
  DeleteFeedbacksV1PinsInput,
  DeleteFeedbacksV1PinsResponse,
} from "./types.js";

export const DELETE_FEEDBACKS_V1_PINS_OPERATION_ID = "deleteFeedbacksV1Pins";

const definition: WbOperationDefinition<DeleteFeedbacksV1PinsResponse> = {
  operationId: DELETE_FEEDBACKS_V1_PINS_OPERATION_ID,
  method: "DELETE",
  path: "/api/feedbacks/v1/pins",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteFeedbacksV1PinsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeDeleteFeedbacksV1Pins(
  execute: WbOperationExecutor,
  input: DeleteFeedbacksV1PinsInput,
  options: WbRequestOptions = {},
): Promise<DeleteFeedbacksV1PinsResponse> {
  return execute(definition, input, options);
}
