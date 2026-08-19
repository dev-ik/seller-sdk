// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetCampaignResponse } from "./contract.js";
import type { GetCampaignInput, GetCampaignResponse } from "./types.js";

export const GET_CAMPAIGN_OPERATION_ID = "getCampaign";

const definition: YmOperationDefinition<GetCampaignResponse> = {
  operationId: GET_CAMPAIGN_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetCampaignResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetCampaign(
  execute: YmOperationExecutor,
  input: GetCampaignInput,
  options: YmRequestOptions = {},
): Promise<GetCampaignResponse> {
  return execute(definition, input, options);
}
