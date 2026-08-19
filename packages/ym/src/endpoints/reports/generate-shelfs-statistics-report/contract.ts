// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateShelfsStatisticsReportResponse } from "./types.js";

const generateShelfsStatisticsReportResponse200Schema =
  createYmSchema<GenerateShelfsStatisticsReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateShelfsStatisticsReportResponse(
  status: number,
  input: unknown,
): GenerateShelfsStatisticsReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateShelfsStatisticsReportResponse200Schema,
        input,
        "generateShelfsStatisticsReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateShelfsStatisticsReport",
        status,
      );
  }
}
