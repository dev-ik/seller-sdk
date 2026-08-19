// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetCampaignQuarantineOffersResponse } from "./contract.js";
import type {
  GetCampaignQuarantineOffersInput,
  GetCampaignQuarantineOffersResponse,
} from "./types.js";

export const GET_CAMPAIGN_QUARANTINE_OFFERS_OPERATION_ID =
  "getCampaignQuarantineOffers";

const definition: YmOperationDefinition<GetCampaignQuarantineOffersResponse> = {
  operationId: GET_CAMPAIGN_QUARANTINE_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/price-quarantine",
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
  parseResponse: parseGetCampaignQuarantineOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetCampaignQuarantineOffers(
  execute: YmOperationExecutor,
  input: GetCampaignQuarantineOffersInput,
  options: YmRequestOptions = {},
): Promise<GetCampaignQuarantineOffersResponse> {
  return execute(definition, input, options);
}
