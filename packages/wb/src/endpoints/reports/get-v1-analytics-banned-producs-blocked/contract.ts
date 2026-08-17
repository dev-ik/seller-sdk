// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AnalyticsBannedProducsBlockedResponse } from "./types.js";

const getV1AnalyticsBannedProducsBlockedResponse200Schema =
  createWbSchema<GetV1AnalyticsBannedProducsBlockedResponse>(
    {
      kind: "object",
      properties: {
        report: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              brand: { kind: "string" },
              nmId: { kind: "number", integer: true },
              title: { kind: "string" },
              vendorCode: { kind: "string" },
              reason: { kind: "string" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    reportsComponents,
  );

export function parseGetV1AnalyticsBannedProducsBlockedResponse(
  status: number,
  input: unknown,
): GetV1AnalyticsBannedProducsBlockedResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AnalyticsBannedProducsBlockedResponse200Schema,
        input,
        "getV1AnalyticsBannedProducsBlocked",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getV1AnalyticsBannedProducsBlocked",
        status,
      );
  }
}
