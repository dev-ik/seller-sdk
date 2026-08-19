// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateGoodsRealizationReportResponse } from "./contract.js";
import type {
  GenerateGoodsRealizationReportInput,
  GenerateGoodsRealizationReportResponse,
} from "./types.js";

export const GENERATE_GOODS_REALIZATION_REPORT_OPERATION_ID =
  "generateGoodsRealizationReport";

const definition: YmOperationDefinition<GenerateGoodsRealizationReportResponse> =
  {
    operationId: GENERATE_GOODS_REALIZATION_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/goods-realization/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "format", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateGoodsRealizationReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateGoodsRealizationReport(
  execute: YmOperationExecutor,
  input: GenerateGoodsRealizationReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateGoodsRealizationReportResponse> {
  return execute(definition, input, options);
}
