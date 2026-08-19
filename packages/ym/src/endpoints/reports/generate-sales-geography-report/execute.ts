// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateSalesGeographyReportResponse } from "./contract.js";
import type {
  GenerateSalesGeographyReportInput,
  GenerateSalesGeographyReportResponse,
} from "./types.js";

export const GENERATE_SALES_GEOGRAPHY_REPORT_OPERATION_ID =
  "generateSalesGeographyReport";

const definition: YmOperationDefinition<GenerateSalesGeographyReportResponse> =
  {
    operationId: GENERATE_SALES_GEOGRAPHY_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/sales-geography/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "format", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateSalesGeographyReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateSalesGeographyReport(
  execute: YmOperationExecutor,
  input: GenerateSalesGeographyReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateSalesGeographyReportResponse> {
  return execute(definition, input, options);
}
