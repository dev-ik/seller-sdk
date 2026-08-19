// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetCategoriesTreeResponse } from "./contract.js";
import type {
  GetCategoriesTreeInput,
  GetCategoriesTreeResponse,
} from "./types.js";

export const GET_CATEGORIES_TREE_OPERATION_ID = "getCategoriesTree";

const definition: YmOperationDefinition<GetCategoriesTreeResponse> = {
  operationId: GET_CATEGORIES_TREE_OPERATION_ID,
  method: "POST",
  path: "/v2/categories/tree",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetCategoriesTreeResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetCategoriesTree(
  execute: YmOperationExecutor,
  input?: GetCategoriesTreeInput,
  options: YmRequestOptions = {},
): Promise<GetCategoriesTreeResponse> {
  return execute(definition, input ?? {}, options);
}
