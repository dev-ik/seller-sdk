import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getAnalyticsStocksResponseSchema } from "./contract.js";
import type {
  GetAnalyticsStocksRequest,
  GetAnalyticsStocksResponse,
} from "./types.js";

export const GET_ANALYTICS_STOCKS_OPERATION_ID = "AnalyticsAPI_AnalyticsStocks";

/** @internal */
export async function executeGetAnalyticsStocks(
  transport: Transport,
  input: GetAnalyticsStocksRequest,
  options: OzonRequestOptions = {},
): Promise<GetAnalyticsStocksResponse> {
  const response = await transport.request({
    operationId: GET_ANALYTICS_STOCKS_OPERATION_ID,
    method: "POST",
    path: "/v1/analytics/stocks",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getAnalyticsStocksResponseSchema,
    response.body,
    GET_ANALYTICS_STOCKS_OPERATION_ID,
  );
}
