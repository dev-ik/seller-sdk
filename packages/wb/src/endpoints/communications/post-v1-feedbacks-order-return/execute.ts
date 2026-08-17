// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1FeedbacksOrderReturnResponse } from "./contract.js";
import type {
  PostV1FeedbacksOrderReturnInput,
  PostV1FeedbacksOrderReturnResponse,
} from "./types.js";

export const POST_V1_FEEDBACKS_ORDER_RETURN_OPERATION_ID =
  "postV1FeedbacksOrderReturn";

const definition: WbOperationDefinition<PostV1FeedbacksOrderReturnResponse> = {
  operationId: POST_V1_FEEDBACKS_ORDER_RETURN_OPERATION_ID,
  method: "POST",
  path: "/api/v1/feedbacks/order/return",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1FeedbacksOrderReturnResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executePostV1FeedbacksOrderReturn(
  execute: WbOperationExecutor,
  input: PostV1FeedbacksOrderReturnInput,
  options: WbRequestOptions = {},
): Promise<PostV1FeedbacksOrderReturnResponse> {
  return execute(definition, input, options);
}
