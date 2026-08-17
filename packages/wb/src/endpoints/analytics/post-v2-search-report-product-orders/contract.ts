// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2SearchReportProductOrdersResponse } from "./types.js";

const postV2SearchReportProductOrdersResponse200Schema =
  createWbSchema<PostV2SearchReportProductOrdersResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "ItemOrdersResponse" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV2SearchReportProductOrdersResponse(
  status: number,
  input: unknown,
): PostV2SearchReportProductOrdersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2SearchReportProductOrdersResponse200Schema,
        input,
        "postV2SearchReportProductOrders",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV2SearchReportProductOrders",
        status,
      );
  }
}
