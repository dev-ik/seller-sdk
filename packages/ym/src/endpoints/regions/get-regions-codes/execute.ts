// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetRegionsCodesResponse } from "./contract.js";
import type { GetRegionsCodesResponse } from "./types.js";

export const GET_REGIONS_CODES_OPERATION_ID = "getRegionsCodes";

const definition: YmOperationDefinition<GetRegionsCodesResponse> = {
  operationId: GET_REGIONS_CODES_OPERATION_ID,
  method: "POST",
  path: "/v2/regions/countries",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetRegionsCodesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetRegionsCodes(
  execute: YmOperationExecutor,
  options: YmRequestOptions = {},
): Promise<GetRegionsCodesResponse> {
  return execute(definition, undefined, options);
}
