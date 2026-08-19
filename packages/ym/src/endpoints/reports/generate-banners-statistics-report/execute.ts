// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateBannersStatisticsReportResponse } from "./contract.js";
import type {
  GenerateBannersStatisticsReportInput,
  GenerateBannersStatisticsReportResponse,
} from "./types.js";

export const GENERATE_BANNERS_STATISTICS_REPORT_OPERATION_ID =
  "generateBannersStatisticsReport";

const definition: YmOperationDefinition<GenerateBannersStatisticsReportResponse> =
  {
    operationId: GENERATE_BANNERS_STATISTICS_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/banners-statistics/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "format", location: "query", required: false, array: false },
      { name: "sourceType", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateBannersStatisticsReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateBannersStatisticsReport(
  execute: YmOperationExecutor,
  input: GenerateBannersStatisticsReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateBannersStatisticsReportResponse> {
  return execute(definition, input, options);
}
