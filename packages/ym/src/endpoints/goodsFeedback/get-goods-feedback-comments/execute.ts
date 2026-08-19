// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetGoodsFeedbackCommentsResponse } from "./contract.js";
import type {
  GetGoodsFeedbackCommentsInput,
  GetGoodsFeedbackCommentsResponse,
} from "./types.js";

export const GET_GOODS_FEEDBACK_COMMENTS_OPERATION_ID =
  "getGoodsFeedbackComments";

const definition: YmOperationDefinition<GetGoodsFeedbackCommentsResponse> = {
  operationId: GET_GOODS_FEEDBACK_COMMENTS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/goods-feedback/comments",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "sourceType", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetGoodsFeedbackCommentsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetGoodsFeedbackComments(
  execute: YmOperationExecutor,
  input: GetGoodsFeedbackCommentsInput,
  options: YmRequestOptions = {},
): Promise<GetGoodsFeedbackCommentsResponse> {
  return execute(definition, input, options);
}
