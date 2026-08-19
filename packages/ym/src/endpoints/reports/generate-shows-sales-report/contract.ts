// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateShowsSalesReportResponse } from "./types.js";

const generateShowsSalesReportResponse200Schema =
  createYmSchema<GenerateShowsSalesReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateShowsSalesReportResponse(
  status: number,
  input: unknown,
): GenerateShowsSalesReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateShowsSalesReportResponse200Schema,
        input,
        "generateShowsSalesReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateShowsSalesReport", status);
  }
}
