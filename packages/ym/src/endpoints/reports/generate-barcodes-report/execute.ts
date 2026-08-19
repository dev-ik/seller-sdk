// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateBarcodesReportResponse } from "./contract.js";
import type {
  GenerateBarcodesReportInput,
  GenerateBarcodesReportResponse,
} from "./types.js";

export const GENERATE_BARCODES_REPORT_OPERATION_ID = "generateBarcodesReport";

const definition: YmOperationDefinition<GenerateBarcodesReportResponse> = {
  operationId: GENERATE_BARCODES_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v1/reports/documents/barcodes/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateBarcodesReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateBarcodesReport(
  execute: YmOperationExecutor,
  input: GenerateBarcodesReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateBarcodesReportResponse> {
  return execute(definition, input, options);
}
