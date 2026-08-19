// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDeleteGoodsFeedbackCommentResponse } from "./contract.js";
import type {
  DeleteGoodsFeedbackCommentInput,
  DeleteGoodsFeedbackCommentResponse,
} from "./types.js";

export const DELETE_GOODS_FEEDBACK_COMMENT_OPERATION_ID =
  "deleteGoodsFeedbackComment";

const definition: YmOperationDefinition<DeleteGoodsFeedbackCommentResponse> = {
  operationId: DELETE_GOODS_FEEDBACK_COMMENT_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/goods-feedback/comments/delete",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "sourceType", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteGoodsFeedbackCommentResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeDeleteGoodsFeedbackComment(
  execute: YmOperationExecutor,
  input: DeleteGoodsFeedbackCommentInput,
  options: YmRequestOptions = {},
): Promise<DeleteGoodsFeedbackCommentResponse> {
  return execute(definition, input, options);
}
