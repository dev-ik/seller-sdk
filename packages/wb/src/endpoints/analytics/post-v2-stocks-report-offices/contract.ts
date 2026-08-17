// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2StocksReportOfficesResponse } from "./types.js";

const postV2StocksReportOfficesResponse200Schema =
  createWbSchema<PostV2StocksReportOfficesResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "ref", name: "TableShippingOfficeResponse" },
      },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV2StocksReportOfficesResponse(
  status: number,
  input: unknown,
): PostV2StocksReportOfficesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2StocksReportOfficesResponse200Schema,
        input,
        "postV2StocksReportOffices",
      );
    default:
      return unexpectedWbSuccessStatus("postV2StocksReportOffices", status);
  }
}
