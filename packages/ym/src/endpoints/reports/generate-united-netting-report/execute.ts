// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateUnitedNettingReportResponse } from "./contract.js";
import type {
  GenerateUnitedNettingReportInput,
  GenerateUnitedNettingReportResponse,
} from "./types.js";

export const GENERATE_UNITED_NETTING_REPORT_OPERATION_ID =
  "generateUnitedNettingReport";

const definition: YmOperationDefinition<GenerateUnitedNettingReportResponse> = {
  operationId: GENERATE_UNITED_NETTING_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/united-netting/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
    { name: "language", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateUnitedNettingReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateUnitedNettingReport(
  execute: YmOperationExecutor,
  input: GenerateUnitedNettingReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateUnitedNettingReportResponse> {
  return execute(definition, input, options);
}
