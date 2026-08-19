// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetGoodsFeedbacksUrbanadsResponse } from "./contract.js";
import type {
  GetGoodsFeedbacksUrbanadsInput,
  GetGoodsFeedbacksUrbanadsResponse,
} from "./types.js";

export const GET_GOODS_FEEDBACKS_URBANADS_OPERATION_ID =
  "getGoodsFeedbacksUrbanads";

const definition: YmOperationDefinition<GetGoodsFeedbacksUrbanadsResponse> = {
  operationId: GET_GOODS_FEEDBACKS_URBANADS_OPERATION_ID,
  method: "POST",
  path: "/v1/businesses/{businessId}/goods-feedback-advertiser",
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
  parseResponse: parseGetGoodsFeedbacksUrbanadsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetGoodsFeedbacksUrbanads(
  execute: YmOperationExecutor,
  input: GetGoodsFeedbacksUrbanadsInput,
  options: YmRequestOptions = {},
): Promise<GetGoodsFeedbacksUrbanadsResponse> {
  return execute(definition, input, options);
}
