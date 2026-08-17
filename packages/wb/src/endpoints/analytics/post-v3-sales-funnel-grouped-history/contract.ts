// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3SalesFunnelGroupedHistoryResponse } from "./types.js";

const postV3SalesFunnelGroupedHistoryResponse200Schema =
  createWbSchema<PostV3SalesFunnelGroupedHistoryResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "GroupedHistoryResponse" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV3SalesFunnelGroupedHistoryResponse(
  status: number,
  input: unknown,
): PostV3SalesFunnelGroupedHistoryResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3SalesFunnelGroupedHistoryResponse200Schema,
        input,
        "postV3SalesFunnelGroupedHistory",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3SalesFunnelGroupedHistory",
        status,
      );
  }
}
