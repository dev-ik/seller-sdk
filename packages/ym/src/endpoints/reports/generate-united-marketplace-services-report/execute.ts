// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateUnitedMarketplaceServicesReportResponse } from "./contract.js";
import type {
  GenerateUnitedMarketplaceServicesReportInput,
  GenerateUnitedMarketplaceServicesReportResponse,
} from "./types.js";

export const GENERATE_UNITED_MARKETPLACE_SERVICES_REPORT_OPERATION_ID =
  "generateUnitedMarketplaceServicesReport";

const definition: YmOperationDefinition<GenerateUnitedMarketplaceServicesReportResponse> =
  {
    operationId: GENERATE_UNITED_MARKETPLACE_SERVICES_REPORT_OPERATION_ID,
    method: "POST",
    path: "/v2/reports/united-marketplace-services/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "format", location: "query", required: false, array: false },
      { name: "language", location: "query", required: false, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGenerateUnitedMarketplaceServicesReportResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGenerateUnitedMarketplaceServicesReport(
  execute: YmOperationExecutor,
  input: GenerateUnitedMarketplaceServicesReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateUnitedMarketplaceServicesReportResponse> {
  return execute(definition, input, options);
}
