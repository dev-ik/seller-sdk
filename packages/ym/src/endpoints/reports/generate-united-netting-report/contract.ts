// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateUnitedNettingReportResponse } from "./types.js";

const generateUnitedNettingReportResponse200Schema =
  createYmSchema<GenerateUnitedNettingReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateUnitedNettingReportResponse(
  status: number,
  input: unknown,
): GenerateUnitedNettingReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateUnitedNettingReportResponse200Schema,
        input,
        "generateUnitedNettingReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateUnitedNettingReport", status);
  }
}
