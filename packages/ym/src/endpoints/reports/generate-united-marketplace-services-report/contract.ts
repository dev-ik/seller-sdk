// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateUnitedMarketplaceServicesReportResponse } from "./types.js";

const generateUnitedMarketplaceServicesReportResponse200Schema =
  createYmSchema<GenerateUnitedMarketplaceServicesReportResponse>(
    { kind: "ref", name: "GenerateReportResponse" },
    reportsComponents,
  );

export function parseGenerateUnitedMarketplaceServicesReportResponse(
  status: number,
  input: unknown,
): GenerateUnitedMarketplaceServicesReportResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateUnitedMarketplaceServicesReportResponse200Schema,
        input,
        "generateUnitedMarketplaceServicesReport",
      );
    default:
      return unexpectedYmSuccessStatus(
        "generateUnitedMarketplaceServicesReport",
        status,
      );
  }
}
