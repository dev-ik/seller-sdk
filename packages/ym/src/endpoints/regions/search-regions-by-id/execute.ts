// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSearchRegionsByIdResponse } from "./contract.js";
import type {
  SearchRegionsByIdInput,
  SearchRegionsByIdResponse,
} from "./types.js";

export const SEARCH_REGIONS_BY_ID_OPERATION_ID = "searchRegionsById";

const definition: YmOperationDefinition<SearchRegionsByIdResponse> = {
  operationId: SEARCH_REGIONS_BY_ID_OPERATION_ID,
  method: "GET",
  path: "/v2/regions/{regionId}",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "regionId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSearchRegionsByIdResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSearchRegionsById(
  execute: YmOperationExecutor,
  input: SearchRegionsByIdInput,
  options: YmRequestOptions = {},
): Promise<SearchRegionsByIdResponse> {
  return execute(definition, input, options);
}
