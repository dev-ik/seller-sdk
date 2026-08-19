// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateShowsBoostReportResponse } from "./types.js";

const generateShowsBoostReportResponse200Schema =
  createYmSchema<GenerateShowsBoostReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateShowsBoostReportResponse(
  status: number,
  input: unknown,
): GenerateShowsBoostReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateShowsBoostReportResponse200Schema,
        input,
        "generateShowsBoostReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateShowsBoostReport", status);
  }
}
