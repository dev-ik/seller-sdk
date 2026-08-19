// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseConfirmBusinessPricesResponse } from "./contract.js";
import type {
  ConfirmBusinessPricesInput,
  ConfirmBusinessPricesResponse,
} from "./types.js";

export const CONFIRM_BUSINESS_PRICES_OPERATION_ID = "confirmBusinessPrices";

const definition: YmOperationDefinition<ConfirmBusinessPricesResponse> = {
  operationId: CONFIRM_BUSINESS_PRICES_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/price-quarantine/confirm",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseConfirmBusinessPricesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeConfirmBusinessPrices(
  execute: YmOperationExecutor,
  input: ConfirmBusinessPricesInput,
  options: YmRequestOptions = {},
): Promise<ConfirmBusinessPricesResponse> {
  return execute(definition, input, options);
}
