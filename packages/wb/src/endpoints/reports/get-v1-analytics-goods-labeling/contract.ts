// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AnalyticsGoodsLabelingResponse } from "./types.js";

const getV1AnalyticsGoodsLabelingResponse200Schema =
  createWbSchema<GetV1AnalyticsGoodsLabelingResponse>(
    {
      kind: "object",
      properties: {
        report: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              amount: { kind: "number" },
              date: { kind: "string" },
              incomeId: { kind: "number", integer: true },
              nmID: { kind: "number", integer: true },
              photoUrls: { kind: "array", items: { kind: "string" } },
              shkID: { kind: "number", integer: true },
              sku: { kind: "string" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    reportsComponents,
  );

export function parseGetV1AnalyticsGoodsLabelingResponse(
  status: number,
  input: unknown,
): GetV1AnalyticsGoodsLabelingResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AnalyticsGoodsLabelingResponse200Schema,
        input,
        "getV1AnalyticsGoodsLabeling",
      );
    default:
      return unexpectedWbSuccessStatus("getV1AnalyticsGoodsLabeling", status);
  }
}
