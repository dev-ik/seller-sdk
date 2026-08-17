// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2SearchReportTableDetailsResponse } from "./types.js";

const postV2SearchReportTableDetailsResponse200Schema =
  createWbSchema<PostV2SearchReportTableDetailsResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "TableDetailsResponse" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV2SearchReportTableDetailsResponse(
  status: number,
  input: unknown,
): PostV2SearchReportTableDetailsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2SearchReportTableDetailsResponse200Schema,
        input,
        "postV2SearchReportTableDetails",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV2SearchReportTableDetails",
        status,
      );
  }
}
