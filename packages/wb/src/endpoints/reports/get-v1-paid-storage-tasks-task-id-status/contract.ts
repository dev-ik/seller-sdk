// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1PaidStorageTasksTaskIdStatusResponse } from "./types.js";

const getV1PaidStorageTasksTaskIdStatusResponse200Schema =
  createWbSchema<GetV1PaidStorageTasksTaskIdStatusResponse>(
    { kind: "ref", name: "GetTasksResponse" },
    reportsComponents,
  );

export function parseGetV1PaidStorageTasksTaskIdStatusResponse(
  status: number,
  input: unknown,
): GetV1PaidStorageTasksTaskIdStatusResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1PaidStorageTasksTaskIdStatusResponse200Schema,
        input,
        "getV1PaidStorageTasksTaskIdStatus",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getV1PaidStorageTasksTaskIdStatus",
        status,
      );
  }
}
