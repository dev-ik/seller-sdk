// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2NmReportDownloadsRetryResponse } from "./contract.js";
import type {
  PostV2NmReportDownloadsRetryInput,
  PostV2NmReportDownloadsRetryResponse,
} from "./types.js";

export const POST_V2_NM_REPORT_DOWNLOADS_RETRY_OPERATION_ID =
  "postV2NmReportDownloadsRetry";

const definition: WbOperationDefinition<PostV2NmReportDownloadsRetryResponse> =
  {
    operationId: POST_V2_NM_REPORT_DOWNLOADS_RETRY_OPERATION_ID,
    method: "POST",
    path: "/api/v2/nm-report/downloads/retry",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV2NmReportDownloadsRetryResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV2NmReportDownloadsRetry(
  execute: WbOperationExecutor,
  input: PostV2NmReportDownloadsRetryInput,
  options: WbRequestOptions = {},
): Promise<PostV2NmReportDownloadsRetryResponse> {
  return execute(definition, input, options);
}
