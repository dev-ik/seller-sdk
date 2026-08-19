// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateBoostConsolidatedReportResponse } from "./types.js";

const generateBoostConsolidatedReportResponse200Schema =
  createYmSchema<GenerateBoostConsolidatedReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateBoostConsolidatedReportResponse(
  status: number,
  input: unknown,
): GenerateBoostConsolidatedReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateBoostConsolidatedReportResponse200Schema,
        input,
        "generateBoostConsolidatedReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateBoostConsolidatedReport",
        status,
      );
  }
}
