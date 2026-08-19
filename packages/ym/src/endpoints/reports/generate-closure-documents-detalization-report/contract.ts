// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateClosureDocumentsDetalizationReportResponse } from "./types.js";

const generateClosureDocumentsDetalizationReportResponse200Schema =
  createYmSchema<GenerateClosureDocumentsDetalizationReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateClosureDocumentsDetalizationReportResponse(
  status: number,
  input: unknown,
): GenerateClosureDocumentsDetalizationReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateClosureDocumentsDetalizationReportResponse200Schema,
        input,
        "generateClosureDocumentsDetalizationReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateClosureDocumentsDetalizationReport",
        status,
      );
  }
}
