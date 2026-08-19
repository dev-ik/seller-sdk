// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSearchRegionChildrenResponse } from "./contract.js";
import type {
  SearchRegionChildrenInput,
  SearchRegionChildrenResponse,
} from "./types.js";

export const SEARCH_REGION_CHILDREN_OPERATION_ID = "searchRegionChildren";

const definition: YmOperationDefinition<SearchRegionChildrenResponse> = {
  operationId: SEARCH_REGION_CHILDREN_OPERATION_ID,
  method: "GET",
  path: "/v2/regions/{regionId}/children",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "regionId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "page", location: "query", required: false, array: false },
    { name: "pageSize", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSearchRegionChildrenResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSearchRegionChildren(
  execute: YmOperationExecutor,
  input: SearchRegionChildrenInput,
  options: YmRequestOptions = {},
): Promise<SearchRegionChildrenResponse> {
  return execute(definition, input, options);
}
