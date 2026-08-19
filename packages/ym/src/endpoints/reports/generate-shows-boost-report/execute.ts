// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateShowsBoostReportResponse } from "./contract.js";
import type {
  GenerateShowsBoostReportInput,
  GenerateShowsBoostReportResponse,
} from "./types.js";

export const GENERATE_SHOWS_BOOST_REPORT_OPERATION_ID =
  "generateShowsBoostReport";

const definition: YmOperationDefinition<GenerateShowsBoostReportResponse> = {
  operationId: GENERATE_SHOWS_BOOST_REPORT_OPERATION_ID,
  method: "POST",
  path: "/v2/reports/shows-boost/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "format", location: "query", required: false, array: false },
    { name: "sourceType", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateShowsBoostReportResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateShowsBoostReport(
  execute: YmOperationExecutor,
  input: GenerateShowsBoostReportInput,
  options: YmRequestOptions = {},
): Promise<GenerateShowsBoostReportResponse> {
  return execute(definition, input, options);
}
