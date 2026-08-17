// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AnalyticsGoodsLabelingResponse } from "./contract.js";
import type {
  GetV1AnalyticsGoodsLabelingInput,
  GetV1AnalyticsGoodsLabelingResponse,
} from "./types.js";

export const GET_V1_ANALYTICS_GOODS_LABELING_OPERATION_ID =
  "getV1AnalyticsGoodsLabeling";

const definition: WbOperationDefinition<GetV1AnalyticsGoodsLabelingResponse> = {
  operationId: GET_V1_ANALYTICS_GOODS_LABELING_OPERATION_ID,
  method: "GET",
  path: "/api/v1/analytics/goods-labeling",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1AnalyticsGoodsLabelingResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1AnalyticsGoodsLabeling(
  execute: WbOperationExecutor,
  input: GetV1AnalyticsGoodsLabelingInput,
  options: WbRequestOptions = {},
): Promise<GetV1AnalyticsGoodsLabelingResponse> {
  return execute(definition, input, options);
}
