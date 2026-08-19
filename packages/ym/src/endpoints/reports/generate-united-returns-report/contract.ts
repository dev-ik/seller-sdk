// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateUnitedReturnsReportResponse } from "./types.js";

const generateUnitedReturnsReportResponse200Schema =
  createYmSchema<GenerateUnitedReturnsReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateUnitedReturnsReportResponse(
  status: number,
  input: unknown,
): GenerateUnitedReturnsReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateUnitedReturnsReportResponse200Schema,
        input,
        "generateUnitedReturnsReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateUnitedReturnsReport", status);
  }
}
