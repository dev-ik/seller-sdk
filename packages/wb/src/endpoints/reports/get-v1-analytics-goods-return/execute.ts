// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AnalyticsGoodsReturnResponse } from "./contract.js";
import type {
  GetV1AnalyticsGoodsReturnInput,
  GetV1AnalyticsGoodsReturnResponse,
} from "./types.js";

export const GET_V1_ANALYTICS_GOODS_RETURN_OPERATION_ID =
  "getV1AnalyticsGoodsReturn";

const definition: WbOperationDefinition<GetV1AnalyticsGoodsReturnResponse> = {
  operationId: GET_V1_ANALYTICS_GOODS_RETURN_OPERATION_ID,
  method: "GET",
  path: "/api/v1/analytics/goods-return",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1AnalyticsGoodsReturnResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1AnalyticsGoodsReturn(
  execute: WbOperationExecutor,
  input: GetV1AnalyticsGoodsReturnInput,
  options: WbRequestOptions = {},
): Promise<GetV1AnalyticsGoodsReturnResponse> {
  return execute(definition, input, options);
}
