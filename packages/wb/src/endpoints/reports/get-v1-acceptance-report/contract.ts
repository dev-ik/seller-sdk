// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AcceptanceReportResponse } from "./types.js";

const getV1AcceptanceReportResponse200Schema =
  createWbSchema<GetV1AcceptanceReportResponse>(
    { kind: "ref", name: "CreateTaskResponse" },
    reportsComponents,
  );

export function parseGetV1AcceptanceReportResponse(
  status: number,
  input: unknown,
): GetV1AcceptanceReportResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AcceptanceReportResponse200Schema,
        input,
        "getV1AcceptanceReport",
      );
    default:
      return unexpectedWbSuccessStatus("getV1AcceptanceReport", status);
  }
}
