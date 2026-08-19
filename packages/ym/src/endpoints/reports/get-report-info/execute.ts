// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetReportInfoResponse } from "./contract.js";
import type { GetReportInfoInput, GetReportInfoResponse } from "./types.js";

export const GET_REPORT_INFO_OPERATION_ID = "getReportInfo";

const definition: YmOperationDefinition<GetReportInfoResponse> = {
  operationId: GET_REPORT_INFO_OPERATION_ID,
  method: "GET",
  path: "/v2/reports/info/{reportId}",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "reportId", location: "path", required: true, array: false },
    { name: "sourceType", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetReportInfoResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetReportInfo(
  execute: YmOperationExecutor,
  input: GetReportInfoInput,
  options: YmRequestOptions = {},
): Promise<GetReportInfoResponse> {
  return execute(definition, input, options);
}
