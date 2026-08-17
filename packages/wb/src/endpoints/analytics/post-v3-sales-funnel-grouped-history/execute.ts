// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3SalesFunnelGroupedHistoryResponse } from "./contract.js";
import type {
  PostV3SalesFunnelGroupedHistoryInput,
  PostV3SalesFunnelGroupedHistoryResponse,
} from "./types.js";

export const POST_V3_SALES_FUNNEL_GROUPED_HISTORY_OPERATION_ID =
  "postV3SalesFunnelGroupedHistory";

const definition: WbOperationDefinition<PostV3SalesFunnelGroupedHistoryResponse> =
  {
    operationId: POST_V3_SALES_FUNNEL_GROUPED_HISTORY_OPERATION_ID,
    method: "POST",
    path: "/api/analytics/v3/sales-funnel/grouped/history",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3SalesFunnelGroupedHistoryResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV3SalesFunnelGroupedHistory(
  execute: WbOperationExecutor,
  input: PostV3SalesFunnelGroupedHistoryInput,
  options: WbRequestOptions = {},
): Promise<PostV3SalesFunnelGroupedHistoryResponse> {
  return execute(definition, input, options);
}
