// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateClosureDocumentsReportResponse } from "./types.js";

const generateClosureDocumentsReportResponse200Schema =
  createYmSchema<GenerateClosureDocumentsReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateClosureDocumentsReportResponse(
  status: number,
  input: unknown,
): GenerateClosureDocumentsReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateClosureDocumentsReportResponse200Schema,
        input,
        "generateClosureDocumentsReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateClosureDocumentsReport",
        status,
      );
  }
}
