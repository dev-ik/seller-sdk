// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetCampaignSettingsResponse } from "./contract.js";
import type {
  GetCampaignSettingsInput,
  GetCampaignSettingsResponse,
} from "./types.js";

export const GET_CAMPAIGN_SETTINGS_OPERATION_ID = "getCampaignSettings";

const definition: YmOperationDefinition<GetCampaignSettingsResponse> = {
  operationId: GET_CAMPAIGN_SETTINGS_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/settings",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetCampaignSettingsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetCampaignSettings(
  execute: YmOperationExecutor,
  input: GetCampaignSettingsInput,
  options: YmRequestOptions = {},
): Promise<GetCampaignSettingsResponse> {
  return execute(definition, input, options);
}
