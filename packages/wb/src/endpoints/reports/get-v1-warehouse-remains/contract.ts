// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1WarehouseRemainsResponse } from "./types.js";

const getV1WarehouseRemainsResponse200Schema =
  createWbSchema<GetV1WarehouseRemainsResponse>(
    { kind: "ref", name: "CreateTaskResponse" },
    reportsComponents,
  );

export function parseGetV1WarehouseRemainsResponse(
  status: number,
  input: unknown,
): GetV1WarehouseRemainsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1WarehouseRemainsResponse200Schema,
        input,
        "getV1WarehouseRemains",
      );
    default:
      return unexpectedWbSuccessStatus("getV1WarehouseRemains", status);
  }
}
