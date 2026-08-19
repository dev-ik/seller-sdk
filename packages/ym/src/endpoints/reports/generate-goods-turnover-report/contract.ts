// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateGoodsTurnoverReportResponse } from "./types.js";

const generateGoodsTurnoverReportResponse200Schema =
  createYmSchema<GenerateGoodsTurnoverReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateGoodsTurnoverReportResponse(
  status: number,
  input: unknown,
): GenerateGoodsTurnoverReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateGoodsTurnoverReportResponse200Schema,
        input,
        "generateGoodsTurnoverReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateGoodsTurnoverReport", status);
  }
}
