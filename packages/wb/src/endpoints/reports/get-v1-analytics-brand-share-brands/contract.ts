// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AnalyticsBrandShareBrandsResponse } from "./types.js";

const getV1AnalyticsBrandShareBrandsResponse200Schema =
  createWbSchema<GetV1AnalyticsBrandShareBrandsResponse>(
    {
      kind: "object",
      properties: { data: { kind: "array", items: { kind: "string" } } },
      required: [],
    },
    reportsComponents,
  );

export function parseGetV1AnalyticsBrandShareBrandsResponse(
  status: number,
  input: unknown,
): GetV1AnalyticsBrandShareBrandsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AnalyticsBrandShareBrandsResponse200Schema,
        input,
        "getV1AnalyticsBrandShareBrands",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getV1AnalyticsBrandShareBrands",
        status,
      );
  }
}
