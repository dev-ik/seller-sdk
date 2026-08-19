// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetGoodsQuestionsResponse } from "./contract.js";
import type {
  GetGoodsQuestionsInput,
  GetGoodsQuestionsResponse,
} from "./types.js";

export const GET_GOODS_QUESTIONS_OPERATION_ID = "getGoodsQuestions";

const definition: YmOperationDefinition<GetGoodsQuestionsResponse> = {
  operationId: GET_GOODS_QUESTIONS_OPERATION_ID,
  method: "POST",
  path: "/v1/businesses/{businessId}/goods-questions",
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
  parseResponse: parseGetGoodsQuestionsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetGoodsQuestions(
  execute: YmOperationExecutor,
  input: GetGoodsQuestionsInput,
  options: YmRequestOptions = {},
): Promise<GetGoodsQuestionsResponse> {
  return execute(definition, input, options);
}
