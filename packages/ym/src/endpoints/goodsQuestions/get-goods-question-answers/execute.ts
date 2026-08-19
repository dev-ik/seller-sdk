// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetGoodsQuestionAnswersResponse } from "./contract.js";
import type {
  GetGoodsQuestionAnswersInput,
  GetGoodsQuestionAnswersResponse,
} from "./types.js";

export const GET_GOODS_QUESTION_ANSWERS_OPERATION_ID =
  "getGoodsQuestionAnswers";

const definition: YmOperationDefinition<GetGoodsQuestionAnswersResponse> = {
  operationId: GET_GOODS_QUESTION_ANSWERS_OPERATION_ID,
  method: "POST",
  path: "/v1/businesses/{businessId}/goods-questions/answers",
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
  parseResponse: parseGetGoodsQuestionAnswersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetGoodsQuestionAnswers(
  execute: YmOperationExecutor,
  input: GetGoodsQuestionAnswersInput,
  options: YmRequestOptions = {},
): Promise<GetGoodsQuestionAnswersResponse> {
  return execute(definition, input, options);
}
