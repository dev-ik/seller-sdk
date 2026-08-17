// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV2NmReportDownloadsResponse } from "./types.js";

const getV2NmReportDownloadsResponse200Schema =
  createWbSchema<GetV2NmReportDownloadsResponse>(
    { kind: "ref", name: "NmReportGetReportsResponse" },
    analyticsComponents,
  );

export function parseGetV2NmReportDownloadsResponse(
  status: number,
  input: unknown,
): GetV2NmReportDownloadsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV2NmReportDownloadsResponse200Schema,
        input,
        "getV2NmReportDownloads",
      );
    default:
      return unexpectedWbSuccessStatus("getV2NmReportDownloads", status);
  }
}
