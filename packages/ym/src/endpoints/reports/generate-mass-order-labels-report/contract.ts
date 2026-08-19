// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateMassOrderLabelsReportResponse } from "./types.js";

const generateMassOrderLabelsReportResponse200Schema =
  createYmSchema<GenerateMassOrderLabelsReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateMassOrderLabelsReportResponse(
  status: number,
  input: unknown,
): GenerateMassOrderLabelsReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateMassOrderLabelsReportResponse200Schema,
        input,
        "generateMassOrderLabelsReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateMassOrderLabelsReport", status);
  }
}
