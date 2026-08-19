// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetStocksOnPartnerWarehousesResponse } from "./contract.js";
import type {
  GetStocksOnPartnerWarehousesInput,
  GetStocksOnPartnerWarehousesResponse,
} from "./types.js";

export const GET_STOCKS_ON_PARTNER_WAREHOUSES_OPERATION_ID =
  "getStocksOnPartnerWarehouses";

const definition: YmOperationDefinition<GetStocksOnPartnerWarehousesResponse> =
  {
    operationId: GET_STOCKS_ON_PARTNER_WAREHOUSES_OPERATION_ID,
    method: "POST",
    path: "/v3/businesses/{businessId}/offers/stocks",
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
    parseResponse: parseGetStocksOnPartnerWarehousesResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGetStocksOnPartnerWarehouses(
  execute: YmOperationExecutor,
  input: GetStocksOnPartnerWarehousesInput,
  options: YmRequestOptions = {},
): Promise<GetStocksOnPartnerWarehousesResponse> {
  return execute(definition, input, options);
}
