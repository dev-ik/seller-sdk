// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2StocksReportProductsProductsResponse } from "./contract.js";
import type {
  PostV2StocksReportProductsProductsInput,
  PostV2StocksReportProductsProductsResponse,
} from "./types.js";

export const POST_V2_STOCKS_REPORT_PRODUCTS_PRODUCTS_OPERATION_ID =
  "postV2StocksReportProductsProducts";

const definition: WbOperationDefinition<PostV2StocksReportProductsProductsResponse> =
  {
    operationId: POST_V2_STOCKS_REPORT_PRODUCTS_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/api/v2/stocks-report/products/products",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV2StocksReportProductsProductsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV2StocksReportProductsProducts(
  execute: WbOperationExecutor,
  input: PostV2StocksReportProductsProductsInput,
  options: WbRequestOptions = {},
): Promise<PostV2StocksReportProductsProductsResponse> {
  return execute(definition, input, options);
}
