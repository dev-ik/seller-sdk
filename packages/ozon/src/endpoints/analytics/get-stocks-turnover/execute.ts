import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getAnalyticsStocksTurnoverResponseSchema } from "./contract.js";
import type {
  GetAnalyticsStocksTurnoverRequest,
  GetAnalyticsStocksTurnoverResponse,
} from "./types.js";

export const GET_ANALYTICS_STOCKS_TURNOVER_OPERATION_ID =
  "AnalyticsAPI_StocksTurnover";

/** @internal */
export async function executeGetAnalyticsStocksTurnover(
  transport: Transport,
  input: GetAnalyticsStocksTurnoverRequest,
  options: OzonRequestOptions = {},
): Promise<GetAnalyticsStocksTurnoverResponse> {
  const response = await transport.request({
    operationId: GET_ANALYTICS_STOCKS_TURNOVER_OPERATION_ID,
    method: "POST",
    path: "/v1/analytics/turnover/stocks",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getAnalyticsStocksTurnoverResponseSchema,
    response.body,
    GET_ANALYTICS_STOCKS_TURNOVER_OPERATION_ID,
  );
}
