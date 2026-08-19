// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateCompetitorsPositionReportResponse } from "./types.js";

const generateCompetitorsPositionReportResponse200Schema =
  createYmSchema<GenerateCompetitorsPositionReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateCompetitorsPositionReportResponse(
  status: number,
  input: unknown,
): GenerateCompetitorsPositionReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateCompetitorsPositionReportResponse200Schema,
        input,
        "generateCompetitorsPositionReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateCompetitorsPositionReport",
        status,
      );
  }
}
