// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1PaidStorageTasksTaskIdDownloadResponse } from "./types.js";

const getV1PaidStorageTasksTaskIdDownloadResponse200Schema =
  createWbSchema<GetV1PaidStorageTasksTaskIdDownloadResponse>(
    { kind: "ref", name: "ResponsePaidStorage" },
    reportsComponents,
  );

export function parseGetV1PaidStorageTasksTaskIdDownloadResponse(
  status: number,
  input: unknown,
): GetV1PaidStorageTasksTaskIdDownloadResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1PaidStorageTasksTaskIdDownloadResponse200Schema,
        input,
        "getV1PaidStorageTasksTaskIdDownload",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "getV1PaidStorageTasksTaskIdDownload",
        status,
      );
  }
}
