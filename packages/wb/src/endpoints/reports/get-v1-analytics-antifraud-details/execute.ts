// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AnalyticsAntifraudDetailsResponse } from "./contract.js";
import type {
  GetV1AnalyticsAntifraudDetailsInput,
  GetV1AnalyticsAntifraudDetailsResponse,
} from "./types.js";

export const GET_V1_ANALYTICS_ANTIFRAUD_DETAILS_OPERATION_ID =
  "getV1AnalyticsAntifraudDetails";

const definition: WbOperationDefinition<GetV1AnalyticsAntifraudDetailsResponse> =
  {
    operationId: GET_V1_ANALYTICS_ANTIFRAUD_DETAILS_OPERATION_ID,
    method: "GET",
    path: "/api/v1/analytics/antifraud-details",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [
      { name: "date", location: "query", required: false, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1AnalyticsAntifraudDetailsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1AnalyticsAntifraudDetails(
  execute: WbOperationExecutor,
  input?: GetV1AnalyticsAntifraudDetailsInput,
  options: WbRequestOptions = {},
): Promise<GetV1AnalyticsAntifraudDetailsResponse> {
  return execute(definition, input ?? {}, options);
}
