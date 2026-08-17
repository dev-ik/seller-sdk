// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2SearchReportProductSearchTextsResponse } from "./types.js";

const postV2SearchReportProductSearchTextsResponse200Schema =
  createWbSchema<PostV2SearchReportProductSearchTextsResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "ItemSearchTextsResponse" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV2SearchReportProductSearchTextsResponse(
  status: number,
  input: unknown,
): PostV2SearchReportProductSearchTextsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2SearchReportProductSearchTextsResponse200Schema,
        input,
        "postV2SearchReportProductSearchTexts",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV2SearchReportProductSearchTexts",
        status,
      );
  }
}
