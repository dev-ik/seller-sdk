// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateStocksOnWarehousesReportResponse } from "./types.js";

const generateStocksOnWarehousesReportResponse200Schema =
  createYmSchema<GenerateStocksOnWarehousesReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateStocksOnWarehousesReportResponse(
  status: number,
  input: unknown,
): GenerateStocksOnWarehousesReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateStocksOnWarehousesReportResponse200Schema,
        input,
        "generateStocksOnWarehousesReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateStocksOnWarehousesReport",
        status,
      );
  }
}
