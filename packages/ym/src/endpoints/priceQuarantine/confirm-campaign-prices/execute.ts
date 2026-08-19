// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseConfirmCampaignPricesResponse } from "./contract.js";
import type {
  ConfirmCampaignPricesInput,
  ConfirmCampaignPricesResponse,
} from "./types.js";

export const CONFIRM_CAMPAIGN_PRICES_OPERATION_ID = "confirmCampaignPrices";

const definition: YmOperationDefinition<ConfirmCampaignPricesResponse> = {
  operationId: CONFIRM_CAMPAIGN_PRICES_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/price-quarantine/confirm",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseConfirmCampaignPricesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeConfirmCampaignPrices(
  execute: YmOperationExecutor,
  input: ConfirmCampaignPricesInput,
  options: YmRequestOptions = {},
): Promise<ConfirmCampaignPricesResponse> {
  return execute(definition, input, options);
}
