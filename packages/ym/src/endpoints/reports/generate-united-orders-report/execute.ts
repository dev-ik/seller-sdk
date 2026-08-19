// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateUnitedOrdersReportResponse } from "./contract.js";
import type {
  GenerateUnitedOrdersReportInput,
  GenerateUnitedOrdersReportResponse,
} from "./types.js";

export const GENERATE_UNITED_ORDERS_REPORT_OPERATION_ID =
  "generateUnitedOrdersReport";

const definition: YmOperationDefinition<GenerateUnitedOrdersReportResponse> = {
  operationId: GENERATE_UNITED_ORDERS_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/united-orders/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
    { name: "language", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateUnitedOrdersReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateUnitedOrdersReport(
  execute: YmOperationExecutor,
  input: GenerateUnitedOrdersReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateUnitedOrdersReportResponse> {
  return execute(definition, input, options);
}
