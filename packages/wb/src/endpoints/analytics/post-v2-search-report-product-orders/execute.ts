// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2SearchReportProductOrdersResponse } from "./contract.js";
import type {
  PostV2SearchReportProductOrdersInput,
  PostV2SearchReportProductOrdersResponse,
} from "./types.js";

export const POST_V2_SEARCH_REPORT_PRODUCT_ORDERS_OPERATION_ID =
  "postV2SearchReportProductOrders";

const definition: WbOperationDefinition<PostV2SearchReportProductOrdersResponse> =
  {
    operationId: POST_V2_SEARCH_REPORT_PRODUCT_ORDERS_OPERATION_ID,
    method: "POST",
    path: "/api/v2/search-report/product/orders",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV2SearchReportProductOrdersResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV2SearchReportProductOrders(
  execute: WbOperationExecutor,
  input: PostV2SearchReportProductOrdersInput,
  options: WbRequestOptions = {},
): Promise<PostV2SearchReportProductOrdersResponse> {
  return execute(definition, input, options);
}
