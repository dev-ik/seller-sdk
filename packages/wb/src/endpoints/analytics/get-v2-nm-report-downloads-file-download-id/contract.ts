// Generated runtime response contract for this Wildberries endpoint.
import {
  parseWbBinaryResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import type { GetV2NmReportDownloadsFileDownloadIdResponse } from "./types.js";

export function parseGetV2NmReportDownloadsFileDownloadIdResponse(
  status: number,
  input: unknown,
): GetV2NmReportDownloadsFileDownloadIdResponse {
  switch (status) {
    case 200:
      return parseWbBinaryResponse(
        input,
        "getV2NmReportDownloadsFileDownloadId",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getV2NmReportDownloadsFileDownloadId",
        status,
      );
  }
}
