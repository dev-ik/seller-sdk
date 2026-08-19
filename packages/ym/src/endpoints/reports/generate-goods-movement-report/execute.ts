// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateGoodsMovementReportResponse } from "./contract.js";
import type {
  GenerateGoodsMovementReportInput,
  GenerateGoodsMovementReportResponse,
} from "./types.js";

export const GENERATE_GOODS_MOVEMENT_REPORT_OPERATION_ID =
  "generateGoodsMovementReport";

const definition: YmOperationDefinition<GenerateGoodsMovementReportResponse> = {
  operationId: GENERATE_GOODS_MOVEMENT_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/goods-movement/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateGoodsMovementReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateGoodsMovementReport(
  execute: YmOperationExecutor,
  input: GenerateGoodsMovementReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateGoodsMovementReportResponse> {
  return execute(definition, input, options);
}
