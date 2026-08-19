// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetPricesResponse } from "./contract.js";
import type { GetPricesInput, GetPricesResponse } from "./types.js";

export const GET_PRICES_OPERATION_ID = "getPrices";

const definition: YmOperationDefinition<GetPricesResponse> = {
  operationId: GET_PRICES_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/offer-prices",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "archived", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetPricesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetPrices(
  execute: YmOperationExecutor,
  input: GetPricesInput,
  options: YmRequestOptions = {},
): Promise<GetPricesResponse> {
  return execute(definition, input, options);
}
