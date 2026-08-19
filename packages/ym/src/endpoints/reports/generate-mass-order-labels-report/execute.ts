// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateMassOrderLabelsReportResponse } from "./contract.js";
import type {
  GenerateMassOrderLabelsReportInput,
  GenerateMassOrderLabelsReportResponse,
} from "./types.js";

export const GENERATE_MASS_ORDER_LABELS_REPORT_OPERATION_ID =
  "generateMassOrderLabelsReport";

const definition: YmOperationDefinition<GenerateMassOrderLabelsReportResponse> =
  {
    operationId: GENERATE_MASS_ORDER_LABELS_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/documents/labels/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "format", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateMassOrderLabelsReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateMassOrderLabelsReport(
  execute: YmOperationExecutor,
  input: GenerateMassOrderLabelsReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateMassOrderLabelsReportResponse> {
  return execute(definition, input, options);
}
