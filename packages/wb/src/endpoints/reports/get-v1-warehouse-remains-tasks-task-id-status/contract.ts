// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1WarehouseRemainsTasksTaskIdStatusResponse } from "./types.js";

const getV1WarehouseRemainsTasksTaskIdStatusResponse200Schema =
  createWbSchema<GetV1WarehouseRemainsTasksTaskIdStatusResponse>(
    { kind: "ref", name: "GetTasksResponse" },
    reportsComponents,
  );

export function parseGetV1WarehouseRemainsTasksTaskIdStatusResponse(
  status: number,
  input: unknown,
): GetV1WarehouseRemainsTasksTaskIdStatusResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1WarehouseRemainsTasksTaskIdStatusResponse200Schema,
        input,
        "getV1WarehouseRemainsTasksTaskIdStatus",
      );
    default:
      return unexpectedWbSuccessStatus(
        "getV1WarehouseRemainsTasksTaskIdStatus",
        status,
      );
  }
}
