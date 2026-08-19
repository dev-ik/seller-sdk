// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSearchRegionsByNameResponse } from "./contract.js";
import type {
  SearchRegionsByNameInput,
  SearchRegionsByNameResponse,
} from "./types.js";

export const SEARCH_REGIONS_BY_NAME_OPERATION_ID = "searchRegionsByName";

const definition: YmOperationDefinition<SearchRegionsByNameResponse> = {
  operationId: SEARCH_REGIONS_BY_NAME_OPERATION_ID,
  method: "GET",
  path: "/v2/regions",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "name", location: "query", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSearchRegionsByNameResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSearchRegionsByName(
  execute: YmOperationExecutor,
  input: SearchRegionsByNameInput,
  options: YmRequestOptions = {},
): Promise<SearchRegionsByNameResponse> {
  return execute(definition, input, options);
}
