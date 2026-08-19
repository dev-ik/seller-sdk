// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateGoodsFeedbackReportResponse } from "./contract.js";
import type {
  GenerateGoodsFeedbackReportInput,
  GenerateGoodsFeedbackReportResponse,
} from "./types.js";

export const GENERATE_GOODS_FEEDBACK_REPORT_OPERATION_ID =
  "generateGoodsFeedbackReport";

const definition: YmOperationDefinition<GenerateGoodsFeedbackReportResponse> = {
  operationId: GENERATE_GOODS_FEEDBACK_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/goods-feedback/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateGoodsFeedbackReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateGoodsFeedbackReport(
  execute: YmOperationExecutor,
  input: GenerateGoodsFeedbackReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateGoodsFeedbackReportResponse> {
  return execute(definition, input, options);
}
