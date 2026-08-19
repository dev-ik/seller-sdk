// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateShipmentListDocumentReportResponse } from "./types.js";

const generateShipmentListDocumentReportResponse200Schema =
  createYmSchema<GenerateShipmentListDocumentReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateShipmentListDocumentReportResponse(
  status: number,
  input: unknown,
): GenerateShipmentListDocumentReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateShipmentListDocumentReportResponse200Schema,
        input,
        "generateShipmentListDocumentReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateShipmentListDocumentReport",
        status,
      );
  }
}
