// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateStocksReportResponse } from "./types.js";

const generateStocksReportResponse200Schema =
  createYmSchema<GenerateStocksReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateStocksReportResponse(
  status: number,
  input: unknown,
): GenerateStocksReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateStocksReportResponse200Schema,
        input,
        "generateStocksReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateStocksReport", status);
  }
}
