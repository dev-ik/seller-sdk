// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdatePricesResponse } from "./contract.js";
import type { UpdatePricesInput, UpdatePricesResponse } from "./types.js";

export const UPDATE_PRICES_OPERATION_ID = "updatePrices";

const definition: YmOperationDefinition<UpdatePricesResponse> = {
  operationId: UPDATE_PRICES_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/offer-prices/updates",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdatePricesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdatePrices(
  execute: YmOperationExecutor,
  input: UpdatePricesInput,
  options: YmRequestOptions = {},
): Promise<UpdatePricesResponse> {
  return execute(definition, input, options);
}
