// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateClosureDocumentsReportResponse } from "./contract.js";
import type {
  GenerateClosureDocumentsReportInput,
  GenerateClosureDocumentsReportResponse,
} from "./types.js";

export const GENERATE_CLOSURE_DOCUMENTS_REPORT_OPERATION_ID =
  "generateClosureDocumentsReport";

const definition: YmOperationDefinition<GenerateClosureDocumentsReportResponse> =
  {
    operationId: GENERATE_CLOSURE_DOCUMENTS_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/closure-documents/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateClosureDocumentsReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateClosureDocumentsReport(
  execute: YmOperationExecutor,
  input: GenerateClosureDocumentsReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateClosureDocumentsReportResponse> {
  return execute(definition, input, options);
}
