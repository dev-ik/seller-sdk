import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getAnalyticsManageStocksV1ResponseSchema } from "./contract.js";
import type {
  GetAnalyticsManageStocksV1Request,
  GetAnalyticsManageStocksV1Response,
} from "./types.js";

export const GET_ANALYTICS_MANAGE_STOCKS_V1_OPERATION_ID =
  "AnalyticsAPI_ManageStocks";

export async function executeGetAnalyticsManageStocksV1(
  transport: Transport,
  input: GetAnalyticsManageStocksV1Request,
  options: OzonRequestOptions = {},
): Promise<GetAnalyticsManageStocksV1Response> {
  const response = await transport.request({
    operationId: GET_ANALYTICS_MANAGE_STOCKS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/analytics/manage/stocks",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getAnalyticsManageStocksV1ResponseSchema,
    response.body,
    GET_ANALYTICS_MANAGE_STOCKS_V1_OPERATION_ID,
  );
}
