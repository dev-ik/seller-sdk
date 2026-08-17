// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2NmReportDownloadsResponse } from "./contract.js";
import type {
  PostV2NmReportDownloadsInput,
  PostV2NmReportDownloadsResponse,
} from "./types.js";

export const POST_V2_NM_REPORT_DOWNLOADS_OPERATION_ID =
  "postV2NmReportDownloads";

const definition: WbOperationDefinition<PostV2NmReportDownloadsResponse> = {
  operationId: POST_V2_NM_REPORT_DOWNLOADS_OPERATION_ID,
  method: "POST",
  path: "/api/v2/nm-report/downloads",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV2NmReportDownloadsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/analytics",
  verifiedAt: "2026-08-17",
};

export function executePostV2NmReportDownloads(
  execute: WbOperationExecutor,
  input?: PostV2NmReportDownloadsInput,
  options: WbRequestOptions = {},
): Promise<PostV2NmReportDownloadsResponse> {
  return execute(definition, input ?? {}, options);
}
