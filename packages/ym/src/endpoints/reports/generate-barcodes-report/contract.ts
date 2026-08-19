// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateBarcodesReportResponse } from "./types.js";

const generateBarcodesReportResponse200Schema =
  createYmSchema<GenerateBarcodesReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateBarcodesReportResponse(
  status: number,
  input: unknown,
): GenerateBarcodesReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateBarcodesReportResponse200Schema,
        input,
        "generateBarcodesReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateBarcodesReport", status);
  }
}
