// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetBidsRecommendationsResponse } from "./contract.js";
import type {
  GetBidsRecommendationsInput,
  GetBidsRecommendationsResponse,
} from "./types.js";

export const GET_BIDS_RECOMMENDATIONS_OPERATION_ID = "getBidsRecommendations";

const definition: YmOperationDefinition<GetBidsRecommendationsResponse> = {
  operationId: GET_BIDS_RECOMMENDATIONS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/bids/recommendations",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetBidsRecommendationsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetBidsRecommendations(
  execute: YmOperationExecutor,
  input: GetBidsRecommendationsInput,
  options: YmRequestOptions = {},
): Promise<GetBidsRecommendationsResponse> {
  return execute(definition, input, options);
}
