// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateClosureDocumentsDetalizationReportResponse } from "./contract.js";
import type {
  GenerateClosureDocumentsDetalizationReportInput,
  GenerateClosureDocumentsDetalizationReportResponse,
} from "./types.js";

export const GENERATE_CLOSURE_DOCUMENTS_DETALIZATION_REPORT_OPERATION_ID =
  "generateClosureDocumentsDetalizationReport";

const definition: YmOperationDefinition<GenerateClosureDocumentsDetalizationReportResponse> =
  {
    operationId: GENERATE_CLOSURE_DOCUMENTS_DETALIZATION_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/closure-documents/detalization/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "format", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateClosureDocumentsDetalizationReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateClosureDocumentsDetalizationReport(
  execute: YmOperationExecutor,
  input: GenerateClosureDocumentsDetalizationReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateClosureDocumentsDetalizationReportResponse> {
  return execute(definition, input, options);
}
