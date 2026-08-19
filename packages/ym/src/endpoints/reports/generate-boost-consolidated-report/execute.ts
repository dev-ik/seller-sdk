// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateBoostConsolidatedReportResponse } from "./contract.js";
import type {
  GenerateBoostConsolidatedReportInput,
  GenerateBoostConsolidatedReportResponse,
} from "./types.js";

export const GENERATE_BOOST_CONSOLIDATED_REPORT_OPERATION_ID =
  "generateBoostConsolidatedReport";

const definition: YmOperationDefinition<GenerateBoostConsolidatedReportResponse> =
  {
    operationId: GENERATE_BOOST_CONSOLIDATED_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/boost-consolidated/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "format", location: "query", required: false, array: false },
      { name: "sourceType", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateBoostConsolidatedReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateBoostConsolidatedReport(
  execute: YmOperationExecutor,
  input: GenerateBoostConsolidatedReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateBoostConsolidatedReportResponse> {
  return execute(definition, input, options);
}
