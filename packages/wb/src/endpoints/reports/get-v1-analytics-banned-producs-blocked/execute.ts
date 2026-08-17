// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AnalyticsBannedProducsBlockedResponse } from "./contract.js";
import type {
  GetV1AnalyticsBannedProducsBlockedInput,
  GetV1AnalyticsBannedProducsBlockedResponse,
} from "./types.js";

export const GET_V1_ANALYTICS_BANNED_PRODUCS_BLOCKED_OPERATION_ID =
  "getV1AnalyticsBannedProducsBlocked";

const definition: WbOperationDefinition<GetV1AnalyticsBannedProducsBlockedResponse> =
  {
    operationId: GET_V1_ANALYTICS_BANNED_PRODUCS_BLOCKED_OPERATION_ID,
    method: "GET",
    path: "/api/v1/analytics/banned-products/blocked",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [
      { name: "sort", location: "query", required: true, array: false },
      { name: "order", location: "query", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1AnalyticsBannedProducsBlockedResponse,
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1AnalyticsBannedProducsBlocked(
  execute: WbOperationExecutor,
  input: GetV1AnalyticsBannedProducsBlockedInput,
  options: WbRequestOptions = {},
): Promise<GetV1AnalyticsBannedProducsBlockedResponse> {
  return execute(definition, input, options);
}
