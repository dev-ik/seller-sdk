// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateStocksResponse } from "./contract.js";
import type { UpdateStocksInput, UpdateStocksResponse } from "./types.js";

export const UPDATE_STOCKS_OPERATION_ID = "updateStocks";

const definition: YmOperationDefinition<UpdateStocksResponse> = {
  operationId: UPDATE_STOCKS_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/offers/stocks",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateStocksResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateStocks(
  execute: YmOperationExecutor,
  input: UpdateStocksInput,
  options: YmRequestOptions = {},
): Promise<UpdateStocksResponse> {
  return execute(definition, input, options);
}
