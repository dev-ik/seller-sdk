// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parsePutBidsForCampaignResponse } from "./contract.js";
import type {
  PutBidsForCampaignInput,
  PutBidsForCampaignResponse,
} from "./types.js";

export const PUT_BIDS_FOR_CAMPAIGN_OPERATION_ID = "putBidsForCampaign";

const definition: YmOperationDefinition<PutBidsForCampaignResponse> = {
  operationId: PUT_BIDS_FOR_CAMPAIGN_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/bids",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePutBidsForCampaignResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executePutBidsForCampaign(
  execute: YmOperationExecutor,
  input: PutBidsForCampaignInput,
  options: YmRequestOptions = {},
): Promise<PutBidsForCampaignResponse> {
  return execute(definition, input, options);
}
