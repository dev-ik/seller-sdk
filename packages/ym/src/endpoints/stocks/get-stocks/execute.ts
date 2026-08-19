// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetStocksResponse } from "./contract.js";
import type { GetStocksInput, GetStocksResponse } from "./types.js";

export const GET_STOCKS_OPERATION_ID = "getStocks";

const definition: YmOperationDefinition<GetStocksResponse> = {
  operationId: GET_STOCKS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/offers/stocks",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetStocksResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetStocks(
  execute: YmOperationExecutor,
  input: GetStocksInput,
  options: YmRequestOptions = {},
): Promise<GetStocksResponse> {
  return execute(definition, input, options);
}
