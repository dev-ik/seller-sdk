// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetCampaignOffersResponse } from "./contract.js";
import type {
  GetCampaignOffersInput,
  GetCampaignOffersResponse,
} from "./types.js";

export const GET_CAMPAIGN_OFFERS_OPERATION_ID = "getCampaignOffers";

const definition: YmOperationDefinition<GetCampaignOffersResponse> = {
  operationId: GET_CAMPAIGN_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/offers",
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
  parseResponse: parseGetCampaignOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetCampaignOffers(
  execute: YmOperationExecutor,
  input: GetCampaignOffersInput,
  options: YmRequestOptions = {},
): Promise<GetCampaignOffersResponse> {
  return execute(definition, input, options);
}
