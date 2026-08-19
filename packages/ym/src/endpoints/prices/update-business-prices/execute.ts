// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateBusinessPricesResponse } from "./contract.js";
import type {
  UpdateBusinessPricesInput,
  UpdateBusinessPricesResponse,
} from "./types.js";

export const UPDATE_BUSINESS_PRICES_OPERATION_ID = "updateBusinessPrices";

const definition: YmOperationDefinition<UpdateBusinessPricesResponse> = {
  operationId: UPDATE_BUSINESS_PRICES_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/offer-prices/updates",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateBusinessPricesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateBusinessPrices(
  execute: YmOperationExecutor,
  input: UpdateBusinessPricesInput,
  options: YmRequestOptions = {},
): Promise<UpdateBusinessPricesResponse> {
  return execute(definition, input, options);
}
