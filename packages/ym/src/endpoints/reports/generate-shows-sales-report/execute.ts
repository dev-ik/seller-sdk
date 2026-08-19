// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateShowsSalesReportResponse } from "./contract.js";
import type {
  GenerateShowsSalesReportInput,
  GenerateShowsSalesReportResponse,
} from "./types.js";

export const GENERATE_SHOWS_SALES_REPORT_OPERATION_ID =
  "generateShowsSalesReport";

const definition: YmOperationDefinition<GenerateShowsSalesReportResponse> = {
  operationId: GENERATE_SHOWS_SALES_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/shows-sales/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateShowsSalesReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateShowsSalesReport(
  execute: YmOperationExecutor,
  input: GenerateShowsSalesReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateShowsSalesReportResponse> {
  return execute(definition, input, options);
}
