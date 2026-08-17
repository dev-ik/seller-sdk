// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1SalesReportsDetailedResponse } from "./contract.js";
import type {
  PostV1SalesReportsDetailedInput,
  PostV1SalesReportsDetailedResponse,
} from "./types.js";

export const POST_V1_SALES_REPORTS_DETAILED_OPERATION_ID =
  "postV1SalesReportsDetailed";

const definition: WbOperationDefinition<PostV1SalesReportsDetailedResponse> = {
  operationId: POST_V1_SALES_REPORTS_DETAILED_OPERATION_ID,
  method: "POST",
  path: "/api/finance/v1/sales-reports/detailed",
  productionOrigin: "https://finance-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1SalesReportsDetailedResponse,
  source: "https://dev.wildberries.ru/docs/openapi/finances",
  verifiedAt: "2026-08-17",
};

export function executePostV1SalesReportsDetailed(
  execute: WbOperationExecutor,
  input: PostV1SalesReportsDetailedInput,
  options: WbRequestOptions = {},
): Promise<PostV1SalesReportsDetailedResponse> {
  return execute(definition, input, options);
}
