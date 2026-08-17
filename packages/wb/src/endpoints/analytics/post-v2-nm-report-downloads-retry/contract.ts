// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2NmReportDownloadsRetryResponse } from "./types.js";

const postV2NmReportDownloadsRetryResponse200Schema =
  createWbSchema<PostV2NmReportDownloadsRetryResponse>(
    { kind: "ref", name: "NmReportRetryReportResponse" },
    analyticsComponents,
  );

export function parsePostV2NmReportDownloadsRetryResponse(
  status: number,
  input: unknown,
): PostV2NmReportDownloadsRetryResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2NmReportDownloadsRetryResponse200Schema,
        input,
        "postV2NmReportDownloadsRetry",
      );
    default:
      return unexpectedWbSuccessStatus("postV2NmReportDownloadsRetry", status);
  }
}
