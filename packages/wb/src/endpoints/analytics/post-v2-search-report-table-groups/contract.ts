// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2SearchReportTableGroupsResponse } from "./types.js";

const postV2SearchReportTableGroupsResponse200Schema =
  createWbSchema<PostV2SearchReportTableGroupsResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "TableGroupResponse" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV2SearchReportTableGroupsResponse(
  status: number,
  input: unknown,
): PostV2SearchReportTableGroupsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2SearchReportTableGroupsResponse200Schema,
        input,
        "postV2SearchReportTableGroups",
      );
    default:
      return unexpectedWbSuccessStatus("postV2SearchReportTableGroups", status);
  }
}
