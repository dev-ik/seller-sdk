// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateKeyIndicatorsReportResponse } from "./contract.js";
import type {
  GenerateKeyIndicatorsReportInput,
  GenerateKeyIndicatorsReportResponse,
} from "./types.js";

export const GENERATE_KEY_INDICATORS_REPORT_OPERATION_ID =
  "generateKeyIndicatorsReport";

const definition: YmOperationDefinition<GenerateKeyIndicatorsReportResponse> = {
  operationId: GENERATE_KEY_INDICATORS_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/key-indicators/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateKeyIndicatorsReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateKeyIndicatorsReport(
  execute: YmOperationExecutor,
  input: GenerateKeyIndicatorsReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateKeyIndicatorsReportResponse> {
  return execute(definition, input, options);
}
