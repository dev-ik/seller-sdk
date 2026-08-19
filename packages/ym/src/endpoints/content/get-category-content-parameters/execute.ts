// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetCategoryContentParametersResponse } from "./contract.js";
import type {
  GetCategoryContentParametersInput,
  GetCategoryContentParametersResponse,
} from "./types.js";

export const GET_CATEGORY_CONTENT_PARAMETERS_OPERATION_ID =
  "getCategoryContentParameters";

const definition: YmOperationDefinition<GetCategoryContentParametersResponse> =
  {
    operationId: GET_CATEGORY_CONTENT_PARAMETERS_OPERATION_ID,
    method: "POST",
    path: "/v2/category/{categoryId}/parameters",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "categoryId", location: "path", required: true, array: false },
      { name: "businessId", location: "query", required: false, array: false },
    ],
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetCategoryContentParametersResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGetCategoryContentParameters(
  execute: YmOperationExecutor,
  input: GetCategoryContentParametersInput,
  options: YmRequestOptions = {},
): Promise<GetCategoryContentParametersResponse> {
  return execute(definition, input, options);
}
