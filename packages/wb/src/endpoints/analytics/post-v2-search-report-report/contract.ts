// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2SearchReportReportResponse } from "./types.js";

const postV2SearchReportReportResponse200Schema =
  createWbSchema<PostV2SearchReportReportResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "MainResponse" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV2SearchReportReportResponse(
  status: number,
  input: unknown,
): PostV2SearchReportReportResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2SearchReportReportResponse200Schema,
        input,
        "postV2SearchReportReport",
      );
    default:
      return unexpectedWbSuccessStatus("postV2SearchReportReport", status);
  }
}
