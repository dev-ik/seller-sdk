// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AcceptanceReportTasksTaskIdDownloadResponse } from "./types.js";

const getV1AcceptanceReportTasksTaskIdDownloadResponse200Schema =
  createWbSchema<GetV1AcceptanceReportTasksTaskIdDownloadResponse>(
    {
      kind: "array",
      items: {
        kind: "object",
        properties: {
          count: { kind: "number", integer: true },
          giCreateDate: { kind: "string" },
          incomeId: { kind: "number", integer: true },
          nmID: { kind: "number", integer: true },
          shkCreateDate: { kind: "string" },
          subjectName: { kind: "string" },
          total: { kind: "number" },
        },
        required: [],
      },
    },
    reportsComponents,
  );

export function parseGetV1AcceptanceReportTasksTaskIdDownloadResponse(
  status: number,
  input: unknown,
): GetV1AcceptanceReportTasksTaskIdDownloadResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AcceptanceReportTasksTaskIdDownloadResponse200Schema,
        input,
        "getV1AcceptanceReportTasksTaskIdDownload",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "getV1AcceptanceReportTasksTaskIdDownload",
        status,
      );
  }
}
