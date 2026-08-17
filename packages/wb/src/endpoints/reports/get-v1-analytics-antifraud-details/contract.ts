// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AnalyticsAntifraudDetailsResponse } from "./types.js";

const getV1AnalyticsAntifraudDetailsResponse200Schema =
  createWbSchema<GetV1AnalyticsAntifraudDetailsResponse>(
    {
      kind: "object",
      properties: {
        details: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              nmID: { kind: "number", integer: true },
              sum: { kind: "number", integer: true },
              currency: { kind: "string" },
              dateFrom: { kind: "string" },
              dateTo: { kind: "string" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    reportsComponents,
  );

export function parseGetV1AnalyticsAntifraudDetailsResponse(
  status: number,
  input: unknown,
): GetV1AnalyticsAntifraudDetailsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AnalyticsAntifraudDetailsResponse200Schema,
        input,
        "getV1AnalyticsAntifraudDetails",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getV1AnalyticsAntifraudDetails",
        status,
      );
  }
}
