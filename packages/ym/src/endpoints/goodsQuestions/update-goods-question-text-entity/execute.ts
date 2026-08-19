// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateGoodsQuestionTextEntityResponse } from "./contract.js";
import type {
  UpdateGoodsQuestionTextEntityInput,
  UpdateGoodsQuestionTextEntityResponse,
} from "./types.js";

export const UPDATE_GOODS_QUESTION_TEXT_ENTITY_OPERATION_ID =
  "updateGoodsQuestionTextEntity";

const definition: YmOperationDefinition<UpdateGoodsQuestionTextEntityResponse> =
  {
    operationId: UPDATE_GOODS_QUESTION_TEXT_ENTITY_OPERATION_ID,
    method: "POST",
    path: "/v1/businesses/{businessId}/goods-questions/update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "businessId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseUpdateGoodsQuestionTextEntityResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeUpdateGoodsQuestionTextEntity(
  execute: YmOperationExecutor,
  input: UpdateGoodsQuestionTextEntityInput,
  options: YmRequestOptions = {},
): Promise<UpdateGoodsQuestionTextEntityResponse> {
  return execute(definition, input, options);
}
