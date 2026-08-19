// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateUnitedOrdersReportResponse } from "./types.js";

const generateUnitedOrdersReportResponse200Schema =
  createYmSchema<GenerateUnitedOrdersReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateUnitedOrdersReportResponse(
  status: number,
  input: unknown,
): GenerateUnitedOrdersReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateUnitedOrdersReportResponse200Schema,
        input,
        "generateUnitedOrdersReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateUnitedOrdersReport", status);
  }
}
