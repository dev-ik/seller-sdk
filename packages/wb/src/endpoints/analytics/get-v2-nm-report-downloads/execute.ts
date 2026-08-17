// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV2NmReportDownloadsResponse } from "./contract.js";
import type {
  GetV2NmReportDownloadsInput,
  GetV2NmReportDownloadsResponse,
} from "./types.js";

export const GET_V2_NM_REPORT_DOWNLOADS_OPERATION_ID = "getV2NmReportDownloads";

const definition: WbOperationDefinition<GetV2NmReportDownloadsResponse> = {
  operationId: GET_V2_NM_REPORT_DOWNLOADS_OPERATION_ID,
  method: "GET",
  path: "/api/v2/nm-report/downloads",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    {
      name: "filter[downloadIds]",
      location: "query",
      required: false,
      array: true,
    },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV2NmReportDownloadsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/analytics",
  verifiedAt: "2026-08-17",
};

export function executeGetV2NmReportDownloads(
  execute: WbOperationExecutor,
  input?: GetV2NmReportDownloadsInput,
  options: WbRequestOptions = {},
): Promise<GetV2NmReportDownloadsResponse> {
  return execute(definition, input ?? {}, options);
}
