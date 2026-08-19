// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOfferRecommendationsResponse } from "./contract.js";
import type {
  GetOfferRecommendationsInput,
  GetOfferRecommendationsResponse,
} from "./types.js";

export const GET_OFFER_RECOMMENDATIONS_OPERATION_ID = "getOfferRecommendations";

const definition: YmOperationDefinition<GetOfferRecommendationsResponse> = {
  operationId: GET_OFFER_RECOMMENDATIONS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/offers/recommendations",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOfferRecommendationsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOfferRecommendations(
  execute: YmOperationExecutor,
  input: GetOfferRecommendationsInput,
  options: YmRequestOptions = {},
): Promise<GetOfferRecommendationsResponse> {
  return execute(definition, input, options);
}
