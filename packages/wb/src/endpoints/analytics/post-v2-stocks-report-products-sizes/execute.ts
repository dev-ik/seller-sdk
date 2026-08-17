// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2StocksReportProductsSizesResponse } from "./contract.js";
import type {
  PostV2StocksReportProductsSizesInput,
  PostV2StocksReportProductsSizesResponse,
} from "./types.js";

export const POST_V2_STOCKS_REPORT_PRODUCTS_SIZES_OPERATION_ID =
  "postV2StocksReportProductsSizes";

const definition: WbOperationDefinition<PostV2StocksReportProductsSizesResponse> =
  {
    operationId: POST_V2_STOCKS_REPORT_PRODUCTS_SIZES_OPERATION_ID,
    method: "POST",
    path: "/api/v2/stocks-report/products/sizes",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV2StocksReportProductsSizesResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV2StocksReportProductsSizes(
  execute: WbOperationExecutor,
  input: PostV2StocksReportProductsSizesInput,
  options: WbRequestOptions = {},
): Promise<PostV2StocksReportProductsSizesResponse> {
  return execute(definition, input, options);
}
