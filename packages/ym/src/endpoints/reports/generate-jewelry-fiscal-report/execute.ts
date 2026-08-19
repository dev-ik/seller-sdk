// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateJewelryFiscalReportResponse } from "./contract.js";
import type {
  GenerateJewelryFiscalReportInput,
  GenerateJewelryFiscalReportResponse,
} from "./types.js";

export const GENERATE_JEWELRY_FISCAL_REPORT_OPERATION_ID =
  "generateJewelryFiscalReport";

const definition: YmOperationDefinition<GenerateJewelryFiscalReportResponse> = {
  operationId: GENERATE_JEWELRY_FISCAL_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/jewelry-fiscal/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateJewelryFiscalReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateJewelryFiscalReport(
  execute: YmOperationExecutor,
  input: GenerateJewelryFiscalReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateJewelryFiscalReportResponse> {
  return execute(definition, input, options);
}
