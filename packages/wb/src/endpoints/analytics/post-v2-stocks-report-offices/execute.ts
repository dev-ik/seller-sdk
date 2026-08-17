// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2StocksReportOfficesResponse } from "./contract.js";
import type {
  PostV2StocksReportOfficesInput,
  PostV2StocksReportOfficesResponse,
} from "./types.js";

export const POST_V2_STOCKS_REPORT_OFFICES_OPERATION_ID =
  "postV2StocksReportOffices";

const definition: WbOperationDefinition<PostV2StocksReportOfficesResponse> = {
  operationId: POST_V2_STOCKS_REPORT_OFFICES_OPERATION_ID,
  method: "POST",
  path: "/api/v2/stocks-report/offices",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV2StocksReportOfficesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/analytics",
  verifiedAt: "2026-08-17",
};

export function executePostV2StocksReportOffices(
  execute: WbOperationExecutor,
  input: PostV2StocksReportOfficesInput,
  options: WbRequestOptions = {},
): Promise<PostV2StocksReportOfficesResponse> {
  return execute(definition, input, options);
}
