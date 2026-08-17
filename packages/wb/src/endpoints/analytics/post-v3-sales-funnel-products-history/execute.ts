// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3SalesFunnelProductsHistoryResponse } from "./contract.js";
import type {
  PostV3SalesFunnelProductsHistoryInput,
  PostV3SalesFunnelProductsHistoryResponse,
} from "./types.js";

export const POST_V3_SALES_FUNNEL_PRODUCTS_HISTORY_OPERATION_ID =
  "postV3SalesFunnelProductsHistory";

const definition: WbOperationDefinition<PostV3SalesFunnelProductsHistoryResponse> =
  {
    operationId: POST_V3_SALES_FUNNEL_PRODUCTS_HISTORY_OPERATION_ID,
    method: "POST",
    path: "/api/analytics/v3/sales-funnel/products/history",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3SalesFunnelProductsHistoryResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV3SalesFunnelProductsHistory(
  execute: WbOperationExecutor,
  input: PostV3SalesFunnelProductsHistoryInput,
  options: WbRequestOptions = {},
): Promise<PostV3SalesFunnelProductsHistoryResponse> {
  return execute(definition, input, options);
}
