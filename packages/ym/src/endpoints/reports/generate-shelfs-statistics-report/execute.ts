// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateShelfsStatisticsReportResponse } from "./contract.js";
import type {
  GenerateShelfsStatisticsReportInput,
  GenerateShelfsStatisticsReportResponse,
} from "./types.js";

export const GENERATE_SHELFS_STATISTICS_REPORT_OPERATION_ID =
  "generateShelfsStatisticsReport";

const definition: YmOperationDefinition<GenerateShelfsStatisticsReportResponse> =
  {
    operationId: GENERATE_SHELFS_STATISTICS_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/shelf-statistics/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "format", location: "query", required: false, array: false },
      { name: "sourceType", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateShelfsStatisticsReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateShelfsStatisticsReport(
  execute: YmOperationExecutor,
  input: GenerateShelfsStatisticsReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateShelfsStatisticsReportResponse> {
  return execute(definition, input, options);
}
