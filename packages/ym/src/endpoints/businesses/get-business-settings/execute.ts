// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetBusinessSettingsResponse } from "./contract.js";
import type {
  GetBusinessSettingsInput,
  GetBusinessSettingsResponse,
} from "./types.js";

export const GET_BUSINESS_SETTINGS_OPERATION_ID = "getBusinessSettings";

const definition: YmOperationDefinition<GetBusinessSettingsResponse> = {
  operationId: GET_BUSINESS_SETTINGS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/settings",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetBusinessSettingsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetBusinessSettings(
  execute: YmOperationExecutor,
  input: GetBusinessSettingsInput,
  options: YmRequestOptions = {},
): Promise<GetBusinessSettingsResponse> {
  return execute(definition, input, options);
}
