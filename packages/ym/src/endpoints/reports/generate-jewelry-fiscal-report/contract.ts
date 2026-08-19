// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateJewelryFiscalReportResponse } from "./types.js";

const generateJewelryFiscalReportResponse200Schema =
  createYmSchema<GenerateJewelryFiscalReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateJewelryFiscalReportResponse(
  status: number,
  input: unknown,
): GenerateJewelryFiscalReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateJewelryFiscalReportResponse200Schema,
        input,
        "generateJewelryFiscalReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateJewelryFiscalReport", status);
  }
}
