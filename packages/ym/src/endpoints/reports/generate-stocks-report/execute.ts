// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateStocksReportResponse } from "./contract.js";
import type {
  GenerateStocksReportInput,
  GenerateStocksReportResponse,
} from "./types.js";

export const GENERATE_STOCKS_REPORT_OPERATION_ID = "generateStocksReport";

const definition: YmOperationDefinition<GenerateStocksReportResponse> = {
  operationId: GENERATE_STOCKS_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v3/businesses/{businessId}/reports/stocks/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "format", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateStocksReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateStocksReport(
  execute: YmOperationExecutor,
  input: GenerateStocksReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateStocksReportResponse> {
  return execute(definition, input, options);
}
