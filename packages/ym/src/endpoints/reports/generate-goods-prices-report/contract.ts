// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateGoodsPricesReportResponse } from "./types.js";

const generateGoodsPricesReportResponse200Schema =
  createYmSchema<GenerateGoodsPricesReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateGoodsPricesReportResponse(
  status: number,
  input: unknown,
): GenerateGoodsPricesReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateGoodsPricesReportResponse200Schema,
        input,
        "generateGoodsPricesReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateGoodsPricesReport", status);
  }
}
