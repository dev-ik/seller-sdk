// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateStocksOnPartnerWarehousesResponse } from "./contract.js";
import type {
  UpdateStocksOnPartnerWarehousesInput,
  UpdateStocksOnPartnerWarehousesResponse,
} from "./types.js";

export const UPDATE_STOCKS_ON_PARTNER_WAREHOUSES_OPERATION_ID =
  "updateStocksOnPartnerWarehouses";

const definition: YmOperationDefinition<UpdateStocksOnPartnerWarehousesResponse> =
  {
    operationId: UPDATE_STOCKS_ON_PARTNER_WAREHOUSES_OPERATION_ID,
    method: "POST",
    path: "/v3/businesses/{businessId}/offers/stocks/update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "businessId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseUpdateStocksOnPartnerWarehousesResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeUpdateStocksOnPartnerWarehouses(
  execute: YmOperationExecutor,
  input: UpdateStocksOnPartnerWarehousesInput,
  options: YmRequestOptions = {},
): Promise<UpdateStocksOnPartnerWarehousesResponse> {
  return execute(definition, input, options);
}
