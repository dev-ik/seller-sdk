// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateSalesGeographyReportResponse } from "./types.js";

const generateSalesGeographyReportResponse200Schema =
  createYmSchema<GenerateSalesGeographyReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateSalesGeographyReportResponse(
  status: number,
  input: unknown,
): GenerateSalesGeographyReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateSalesGeographyReportResponse200Schema,
        input,
        "generateSalesGeographyReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateSalesGeographyReport", status);
  }
}
