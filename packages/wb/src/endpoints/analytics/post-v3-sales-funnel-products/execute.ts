// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3SalesFunnelProductsResponse } from "./contract.js";
import type {
  PostV3SalesFunnelProductsInput,
  PostV3SalesFunnelProductsResponse,
} from "./types.js";

export const POST_V3_SALES_FUNNEL_PRODUCTS_OPERATION_ID =
  "postV3SalesFunnelProducts";

const definition: WbOperationDefinition<PostV3SalesFunnelProductsResponse> = {
  operationId: POST_V3_SALES_FUNNEL_PRODUCTS_OPERATION_ID,
  method: "POST",
  path: "/api/analytics/v3/sales-funnel/products",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3SalesFunnelProductsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/analytics",
  verifiedAt: "2026-08-17",
};

export function executePostV3SalesFunnelProducts(
  execute: WbOperationExecutor,
  input: PostV3SalesFunnelProductsInput,
  options: WbRequestOptions = {},
): Promise<PostV3SalesFunnelProductsResponse> {
  return execute(definition, input, options);
}
