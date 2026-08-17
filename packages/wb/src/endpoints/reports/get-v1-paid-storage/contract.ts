// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1PaidStorageResponse } from "./types.js";

const getV1PaidStorageResponse200Schema =
  createWbSchema<GetV1PaidStorageResponse>(
    { kind: "ref", name: "CreateTaskResponse" },
    reportsComponents,
  );

export function parseGetV1PaidStorageResponse(
  status: number,
  input: unknown,
): GetV1PaidStorageResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1PaidStorageResponse200Schema,
        input,
        "getV1PaidStorage",
      );
    default:
      return unexpectedWbSuccessStatus("getV1PaidStorage", status);
  }
}
