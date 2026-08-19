// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateGoodsRealizationReportResponse } from "./types.js";

const generateGoodsRealizationReportResponse200Schema =
  createYmSchema<GenerateGoodsRealizationReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateGoodsRealizationReportResponse(
  status: number,
  input: unknown,
): GenerateGoodsRealizationReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateGoodsRealizationReportResponse200Schema,
        input,
        "generateGoodsRealizationReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateGoodsRealizationReport",
        status,
      );
  }
}
