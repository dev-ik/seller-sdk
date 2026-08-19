// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateKeyIndicatorsReportResponse } from "./types.js";

const generateKeyIndicatorsReportResponse200Schema =
  createYmSchema<GenerateKeyIndicatorsReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateKeyIndicatorsReportResponse(
  status: number,
  input: unknown,
): GenerateKeyIndicatorsReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateKeyIndicatorsReportResponse200Schema,
        input,
        "generateKeyIndicatorsReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateKeyIndicatorsReport", status);
  }
}
