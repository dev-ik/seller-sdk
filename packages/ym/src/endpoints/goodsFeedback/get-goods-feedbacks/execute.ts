// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetGoodsFeedbacksResponse } from "./contract.js";
import type {
  GetGoodsFeedbacksInput,
  GetGoodsFeedbacksResponse,
} from "./types.js";

export const GET_GOODS_FEEDBACKS_OPERATION_ID = "getGoodsFeedbacks";

const definition: YmOperationDefinition<GetGoodsFeedbacksResponse> = {
  operationId: GET_GOODS_FEEDBACKS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/goods-feedback",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetGoodsFeedbacksResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetGoodsFeedbacks(
  execute: YmOperationExecutor,
  input: GetGoodsFeedbacksInput,
  options: YmRequestOptions = {},
): Promise<GetGoodsFeedbacksResponse> {
  return execute(definition, input, options);
}
