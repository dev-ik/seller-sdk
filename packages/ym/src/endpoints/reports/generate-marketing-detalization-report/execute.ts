// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateMarketingDetalizationReportResponse } from "./contract.js";
import type {
  GenerateMarketingDetalizationReportInput,
  GenerateMarketingDetalizationReportResponse,
} from "./types.js";

export const GENERATE_MARKETING_DETALIZATION_REPORT_OPERATION_ID =
  "generateMarketingDetalizationReport";

const definition: YmOperationDefinition<GenerateMarketingDetalizationReportResponse> =
  {
    operationId: GENERATE_MARKETING_DETALIZATION_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v1/businesses/{businessId}/reports/marketing-detalization/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "businessId", location: "path", required: true, array: false },
      { name: "format", location: "query", required: false, array: false },
      { name: "sourceType", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateMarketingDetalizationReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateMarketingDetalizationReport(
  execute: YmOperationExecutor,
  input: GenerateMarketingDetalizationReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateMarketingDetalizationReportResponse> {
  return execute(definition, input, options);
}
