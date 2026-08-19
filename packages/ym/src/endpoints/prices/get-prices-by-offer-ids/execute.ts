// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetPricesByOfferIdsResponse } from "./contract.js";
import type {
  GetPricesByOfferIdsInput,
  GetPricesByOfferIdsResponse,
} from "./types.js";

export const GET_PRICES_BY_OFFER_IDS_OPERATION_ID = "getPricesByOfferIds";

const definition: YmOperationDefinition<GetPricesByOfferIdsResponse> = {
  operationId: GET_PRICES_BY_OFFER_IDS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/offer-prices",
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
  parseResponse: parseGetPricesByOfferIdsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetPricesByOfferIds(
  execute: YmOperationExecutor,
  input: GetPricesByOfferIdsInput,
  options: YmRequestOptions = {},
): Promise<GetPricesByOfferIdsResponse> {
  return execute(definition, input, options);
}
