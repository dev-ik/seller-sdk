// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1AnalyticsExciseReportResponse } from "./types.js";

const postV1AnalyticsExciseReportResponse200Schema =
  createWbSchema<PostV1AnalyticsExciseReportResponse>(
    { kind: "ref", name: "ExciseReportResponse" },
    reportsComponents,
  );

export function parsePostV1AnalyticsExciseReportResponse(
  status: number,
  input: unknown,
): PostV1AnalyticsExciseReportResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1AnalyticsExciseReportResponse200Schema,
        input,
        "postV1AnalyticsExciseReport",
      );
    default:
      return unexpectedWbSuccessStatus("postV1AnalyticsExciseReport", status);
  }
}
