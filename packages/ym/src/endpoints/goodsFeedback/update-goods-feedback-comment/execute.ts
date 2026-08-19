// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateGoodsFeedbackCommentResponse } from "./contract.js";
import type {
  UpdateGoodsFeedbackCommentInput,
  UpdateGoodsFeedbackCommentResponse,
} from "./types.js";

export const UPDATE_GOODS_FEEDBACK_COMMENT_OPERATION_ID =
  "updateGoodsFeedbackComment";

const definition: YmOperationDefinition<UpdateGoodsFeedbackCommentResponse> = {
  operationId: UPDATE_GOODS_FEEDBACK_COMMENT_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/goods-feedback/comments/update",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "sourceType", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateGoodsFeedbackCommentResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateGoodsFeedbackComment(
  execute: YmOperationExecutor,
  input: UpdateGoodsFeedbackCommentInput,
  options: YmRequestOptions = {},
): Promise<UpdateGoodsFeedbackCommentResponse> {
  return execute(definition, input, options);
}
