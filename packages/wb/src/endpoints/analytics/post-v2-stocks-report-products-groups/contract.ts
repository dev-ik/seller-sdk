// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2StocksReportProductsGroupsResponse } from "./types.js";

const postV2StocksReportProductsGroupsResponse200Schema =
  createWbSchema<PostV2StocksReportProductsGroupsResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "TableGroupResponseSt" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV2StocksReportProductsGroupsResponse(
  status: number,
  input: unknown,
): PostV2StocksReportProductsGroupsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2StocksReportProductsGroupsResponse200Schema,
        input,
        "postV2StocksReportProductsGroups",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV2StocksReportProductsGroups",
        status,
      );
  }
}
