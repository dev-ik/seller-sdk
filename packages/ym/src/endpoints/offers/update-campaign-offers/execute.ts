// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateCampaignOffersResponse } from "./contract.js";
import type {
  UpdateCampaignOffersInput,
  UpdateCampaignOffersResponse,
} from "./types.js";

export const UPDATE_CAMPAIGN_OFFERS_OPERATION_ID = "updateCampaignOffers";

const definition: YmOperationDefinition<UpdateCampaignOffersResponse> = {
  operationId: UPDATE_CAMPAIGN_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/offers/update",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateCampaignOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateCampaignOffers(
  execute: YmOperationExecutor,
  input: UpdateCampaignOffersInput,
  options: YmRequestOptions = {},
): Promise<UpdateCampaignOffersResponse> {
  return execute(definition, input, options);
}
