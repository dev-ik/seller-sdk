// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateUnitedReturnsReportResponse } from "./contract.js";
import type {
  GenerateUnitedReturnsReportInput,
  GenerateUnitedReturnsReportResponse,
} from "./types.js";

export const GENERATE_UNITED_RETURNS_REPORT_OPERATION_ID =
  "generateUnitedReturnsReport";

const definition: YmOperationDefinition<GenerateUnitedReturnsReportResponse> = {
  operationId: GENERATE_UNITED_RETURNS_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/united-returns/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateUnitedReturnsReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateUnitedReturnsReport(
  execute: YmOperationExecutor,
  input: GenerateUnitedReturnsReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateUnitedReturnsReportResponse> {
  return execute(definition, input, options);
}
