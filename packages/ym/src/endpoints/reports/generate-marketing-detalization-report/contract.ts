// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateMarketingDetalizationReportResponse } from "./types.js";

const generateMarketingDetalizationReportResponse200Schema =
  createYmSchema<GenerateMarketingDetalizationReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateMarketingDetalizationReportResponse(
  status: number,
  input: unknown,
): GenerateMarketingDetalizationReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateMarketingDetalizationReportResponse200Schema,
        input,
        "generateMarketingDetalizationReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateMarketingDetalizationReport",
        status,
      );
  }
}
