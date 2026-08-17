// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2StocksReportProductsProductsResponse } from "./types.js";

const postV2StocksReportProductsProductsResponse200Schema =
  createWbSchema<PostV2StocksReportProductsProductsResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "TableItemResponse" } },
      required: ["data"],
      nullable: true,
    },
    analyticsComponents,
  );

export function parsePostV2StocksReportProductsProductsResponse(
  status: number,
  input: unknown,
): PostV2StocksReportProductsProductsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2StocksReportProductsProductsResponse200Schema,
        input,
        "postV2StocksReportProductsProducts",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV2StocksReportProductsProducts",
        status,
      );
  }
}
