// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetHiddenOffersResponse } from "./contract.js";
import type { GetHiddenOffersInput, GetHiddenOffersResponse } from "./types.js";

export const GET_HIDDEN_OFFERS_OPERATION_ID = "getHiddenOffers";

const definition: YmOperationDefinition<GetHiddenOffersResponse> = {
  operationId: GET_HIDDEN_OFFERS_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/hidden-offers",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "offer_id", location: "query", required: false, array: true },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetHiddenOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetHiddenOffers(
  execute: YmOperationExecutor,
  input: GetHiddenOffersInput,
  options: YmRequestOptions = {},
): Promise<GetHiddenOffersResponse> {
  return execute(definition, input, options);
}
