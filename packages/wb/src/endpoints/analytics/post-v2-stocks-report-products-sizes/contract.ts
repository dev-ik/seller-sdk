// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2StocksReportProductsSizesResponse } from "./types.js";

const postV2StocksReportProductsSizesResponse200Schema =
  createWbSchema<PostV2StocksReportProductsSizesResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "TableSizeResponse" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV2StocksReportProductsSizesResponse(
  status: number,
  input: unknown,
): PostV2StocksReportProductsSizesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2StocksReportProductsSizesResponse200Schema,
        input,
        "postV2StocksReportProductsSizes",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV2StocksReportProductsSizes",
        status,
      );
  }
}
