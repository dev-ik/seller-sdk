// Generated runtime response contract for this Yandex Market endpoint.
import { operationsComponents } from "../../../contracts/operations.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOperationsResponse } from "./types.js";

const getOperationsResponse200Schema = createYmSchema<GetOperationsResponse>(
  { kind: "ref", name: "GetOperationsResponse" },
  operationsComponents,
);

export function parseGetOperationsResponse(
  status: number,
  input: unknown,
): GetOperationsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOperationsResponse200Schema,
        input,
        "getOperations",
      );
    default:
      return unexpectedYmSuccessStatus("getOperations", status);
  }
}
