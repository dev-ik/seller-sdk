// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2NmReportDownloadsResponse } from "./types.js";

const postV2NmReportDownloadsResponse200Schema =
  createWbSchema<PostV2NmReportDownloadsResponse>(
    { kind: "ref", name: "NmReportCreateReportResponse" },
    analyticsComponents,
  );

export function parsePostV2NmReportDownloadsResponse(
  status: number,
  input: unknown,
): PostV2NmReportDownloadsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2NmReportDownloadsResponse200Schema,
        input,
        "postV2NmReportDownloads",
      );
    default:
      return unexpectedWbSuccessStatus("postV2NmReportDownloads", status);
  }
}
