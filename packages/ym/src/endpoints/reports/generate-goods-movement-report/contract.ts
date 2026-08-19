// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateGoodsMovementReportResponse } from "./types.js";

const generateGoodsMovementReportResponse200Schema =
  createYmSchema<GenerateGoodsMovementReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateGoodsMovementReportResponse(
  status: number,
  input: unknown,
): GenerateGoodsMovementReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateGoodsMovementReportResponse200Schema,
        input,
        "generateGoodsMovementReport",
      );
    default:
      return unexpectedYmSuccessStatus("generateGoodsMovementReport", status);
  }
}
