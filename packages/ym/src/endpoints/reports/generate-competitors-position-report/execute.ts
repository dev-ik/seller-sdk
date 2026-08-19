// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateCompetitorsPositionReportResponse } from "./contract.js";
import type {
  GenerateCompetitorsPositionReportInput,
  GenerateCompetitorsPositionReportResponse,
} from "./types.js";

export const GENERATE_COMPETITORS_POSITION_REPORT_OPERATION_ID =
  "generateCompetitorsPositionReport";

const definition: YmOperationDefinition<GenerateCompetitorsPositionReportResponse> =
  {
    operationId: GENERATE_COMPETITORS_POSITION_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/competitors-position/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "format", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateCompetitorsPositionReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateCompetitorsPositionReport(
  execute: YmOperationExecutor,
  input: GenerateCompetitorsPositionReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateCompetitorsPositionReportResponse> {
  return execute(definition, input, options);
}
