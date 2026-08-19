// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateGoodsFeedbackReportResponse } from "./types.js";

const generateGoodsFeedbackReportResponse200Schema =
  createYmSchema<GenerateGoodsFeedbackReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateGoodsFeedbackReportResponse(
  status: number,
  input: unknown,
): GenerateGoodsFeedbackReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateGoodsFeedbackReportResponse200Schema,
        input,
        "generateGoodsFeedbackReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateGoodsFeedbackReport", status);
  }
}
