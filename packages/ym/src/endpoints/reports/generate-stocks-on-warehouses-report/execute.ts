// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateStocksOnWarehousesReportResponse } from "./contract.js";
import type {
  GenerateStocksOnWarehousesReportInput,
  GenerateStocksOnWarehousesReportResponse,
} from "./types.js";

export const GENERATE_STOCKS_ON_WAREHOUSES_REPORT_OPERATION_ID =
  "generateStocksOnWarehousesReport";

const definition: YmOperationDefinition<GenerateStocksOnWarehousesReportResponse> =
  {
    operationId: GENERATE_STOCKS_ON_WAREHOUSES_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/stocks-on-warehouses/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "format", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateStocksOnWarehousesReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateStocksOnWarehousesReport(
  execute: YmOperationExecutor,
  input: GenerateStocksOnWarehousesReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateStocksOnWarehousesReportResponse> {
  return execute(definition, input, options);
}
