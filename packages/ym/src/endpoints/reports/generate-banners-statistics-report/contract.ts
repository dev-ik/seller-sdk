// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateBannersStatisticsReportResponse } from "./types.js";

const generateBannersStatisticsReportResponse200Schema =
  createYmSchema<GenerateBannersStatisticsReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateBannersStatisticsReportResponse(
  status: number,
  input: unknown,
): GenerateBannersStatisticsReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateBannersStatisticsReportResponse200Schema,
        input,
        "generateBannersStatisticsReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateBannersStatisticsReport",
        status,
      );
  }
}
