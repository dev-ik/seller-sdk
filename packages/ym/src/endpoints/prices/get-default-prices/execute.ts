// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetDefaultPricesResponse } from "./contract.js";
import type {
  GetDefaultPricesInput,
  GetDefaultPricesResponse,
} from "./types.js";

export const GET_DEFAULT_PRICES_OPERATION_ID = "getDefaultPrices";

const definition: YmOperationDefinition<GetDefaultPricesResponse> = {
  operationId: GET_DEFAULT_PRICES_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/offer-prices",
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
  parseResponse: parseGetDefaultPricesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetDefaultPrices(
  execute: YmOperationExecutor,
  input: GetDefaultPricesInput,
  options: YmRequestOptions = {},
): Promise<GetDefaultPricesResponse> {
  return execute(definition, input, options);
}
