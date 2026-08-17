// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2StocksReportProductsGroupsResponse } from "./contract.js";
import type {
  PostV2StocksReportProductsGroupsInput,
  PostV2StocksReportProductsGroupsResponse,
} from "./types.js";

export const POST_V2_STOCKS_REPORT_PRODUCTS_GROUPS_OPERATION_ID =
  "postV2StocksReportProductsGroups";

const definition: WbOperationDefinition<PostV2StocksReportProductsGroupsResponse> =
  {
    operationId: POST_V2_STOCKS_REPORT_PRODUCTS_GROUPS_OPERATION_ID,
    method: "POST",
    path: "/api/v2/stocks-report/products/groups",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV2StocksReportProductsGroupsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV2StocksReportProductsGroups(
  execute: WbOperationExecutor,
  input: PostV2StocksReportProductsGroupsInput,
  options: WbRequestOptions = {},
): Promise<PostV2StocksReportProductsGroupsResponse> {
  return execute(definition, input, options);
}
