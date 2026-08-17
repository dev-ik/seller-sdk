// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV0BidsRecommendationsResponse } from "./contract.js";
import type {
  GetV0BidsRecommendationsInput,
  GetV0BidsRecommendationsResponse,
} from "./types.js";

export const GET_V0_BIDS_RECOMMENDATIONS_OPERATION_ID =
  "getV0BidsRecommendations";

const definition: WbOperationDefinition<GetV0BidsRecommendationsResponse> = {
  operationId: GET_V0_BIDS_RECOMMENDATIONS_OPERATION_ID,
  method: "GET",
  path: "/api/advert/v0/bids/recommendations",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [
    { name: "nmId", location: "query", required: true, array: false },
    { name: "advertId", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV0BidsRecommendationsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV0BidsRecommendations(
  execute: WbOperationExecutor,
  input: GetV0BidsRecommendationsInput,
  options: WbRequestOptions = {},
): Promise<GetV0BidsRecommendationsResponse> {
  return execute(definition, input, options);
}
