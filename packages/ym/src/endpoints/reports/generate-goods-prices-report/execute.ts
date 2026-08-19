// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateGoodsPricesReportResponse } from "./contract.js";
import type {
  GenerateGoodsPricesReportInput,
  GenerateGoodsPricesReportResponse,
} from "./types.js";

export const GENERATE_GOODS_PRICES_REPORT_OPERATION_ID =
  "generateGoodsPricesReport";

const definition: YmOperationDefinition<GenerateGoodsPricesReportResponse> = {
  operationId: GENERATE_GOODS_PRICES_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/goods-prices/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateGoodsPricesReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateGoodsPricesReport(
  execute: YmOperationExecutor,
  input: GenerateGoodsPricesReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateGoodsPricesReportResponse> {
  return execute(definition, input, options);
}
