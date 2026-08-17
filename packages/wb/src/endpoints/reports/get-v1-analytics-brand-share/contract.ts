// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AnalyticsBrandShareResponse } from "./types.js";

const getV1AnalyticsBrandShareResponse200Schema =
  createWbSchema<GetV1AnalyticsBrandShareResponse>(
    {
      kind: "object",
      properties: {
        report: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              applyDate: { kind: "string" },
              brandRating: { kind: "number", integer: true },
              pricePercent: { kind: "number" },
              qtyPercent: { kind: "number" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    reportsComponents,
  );

export function parseGetV1AnalyticsBrandShareResponse(
  status: number,
  input: unknown,
): GetV1AnalyticsBrandShareResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AnalyticsBrandShareResponse200Schema,
        input,
        "getV1AnalyticsBrandShare",
      );
    default:
      return unexpectedWbSuccessStatus("getV1AnalyticsBrandShare", status);
  }
}
