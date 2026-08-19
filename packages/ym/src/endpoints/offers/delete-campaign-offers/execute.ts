// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDeleteCampaignOffersResponse } from "./contract.js";
import type {
  DeleteCampaignOffersInput,
  DeleteCampaignOffersResponse,
} from "./types.js";

export const DELETE_CAMPAIGN_OFFERS_OPERATION_ID = "deleteCampaignOffers";

const definition: YmOperationDefinition<DeleteCampaignOffersResponse> = {
  operationId: DELETE_CAMPAIGN_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/offers/delete",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteCampaignOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeDeleteCampaignOffers(
  execute: YmOperationExecutor,
  input: DeleteCampaignOffersInput,
  options: YmRequestOptions = {},
): Promise<DeleteCampaignOffersResponse> {
  return execute(definition, input, options);
}
