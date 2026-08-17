// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AcceptanceReportTasksTaskIdStatusResponse } from "./types.js";

const getV1AcceptanceReportTasksTaskIdStatusResponse200Schema =
  createWbSchema<GetV1AcceptanceReportTasksTaskIdStatusResponse>(
    { kind: "ref", name: "GetTasksResponse" },
    reportsComponents,
  );

export function parseGetV1AcceptanceReportTasksTaskIdStatusResponse(
  status: number,
  input: unknown,
): GetV1AcceptanceReportTasksTaskIdStatusResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AcceptanceReportTasksTaskIdStatusResponse200Schema,
        input,
        "getV1AcceptanceReportTasksTaskIdStatus",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getV1AcceptanceReportTasksTaskIdStatus",
        status,
      );
  }
}
