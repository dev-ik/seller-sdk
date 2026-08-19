// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateGoodsTurnoverReportResponse } from "./contract.js";
import type {
  GenerateGoodsTurnoverReportInput,
  GenerateGoodsTurnoverReportResponse,
} from "./types.js";

export const GENERATE_GOODS_TURNOVER_REPORT_OPERATION_ID =
  "generateGoodsTurnoverReport";

const definition: YmOperationDefinition<GenerateGoodsTurnoverReportResponse> = {
  operationId: GENERATE_GOODS_TURNOVER_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/goods-turnover/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateGoodsTurnoverReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateGoodsTurnoverReport(
  execute: YmOperationExecutor,
  input: GenerateGoodsTurnoverReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateGoodsTurnoverReportResponse> {
  return execute(definition, input, options);
}
