// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AnalyticsBrandShareParentSubjectsResponse } from "./types.js";

const getV1AnalyticsBrandShareParentSubjectsResponse200Schema =
  createWbSchema<GetV1AnalyticsBrandShareParentSubjectsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              parentId: { kind: "number", integer: true },
              parentName: { kind: "string" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    reportsComponents,
  );

export function parseGetV1AnalyticsBrandShareParentSubjectsResponse(
  status: number,
  input: unknown,
): GetV1AnalyticsBrandShareParentSubjectsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AnalyticsBrandShareParentSubjectsResponse200Schema,
        input,
        "getV1AnalyticsBrandShareParentSubjects",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getV1AnalyticsBrandShareParentSubjects",
        status,
      );
  }
}
