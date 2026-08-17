// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV2NmReportDownloadsFileDownloadIdResponse } from "./contract.js";
import type {
  GetV2NmReportDownloadsFileDownloadIdInput,
  GetV2NmReportDownloadsFileDownloadIdResponse,
} from "./types.js";

export const GET_V2_NM_REPORT_DOWNLOADS_FILE_DOWNLOAD_ID_OPERATION_ID =
  "getV2NmReportDownloadsFileDownloadId";

const definition: WbOperationDefinition<GetV2NmReportDownloadsFileDownloadIdResponse> =
  {
    operationId: GET_V2_NM_REPORT_DOWNLOADS_FILE_DOWNLOAD_ID_OPERATION_ID,
    method: "GET",
    path: "/api/v2/nm-report/downloads/file/{downloadId}",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [
      { name: "downloadId", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "array-buffer",
    accept: "application/zip",
    parseResponse: parseGetV2NmReportDownloadsFileDownloadIdResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executeGetV2NmReportDownloadsFileDownloadId(
  execute: WbOperationExecutor,
  input: GetV2NmReportDownloadsFileDownloadIdInput,
  options: WbRequestOptions = {},
): Promise<GetV2NmReportDownloadsFileDownloadIdResponse> {
  return execute(definition, input, options);
}
