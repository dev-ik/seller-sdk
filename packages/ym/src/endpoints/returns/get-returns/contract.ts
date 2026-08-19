// Generated runtime response contract for this Yandex Market endpoint.
import { returnsComponents } from "../../../contracts/returns.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetReturnsResponse } from "./types.js";

const getReturnsResponse200Schema = createYmSchema<GetReturnsResponse>(
  { kind: "ref", name: "GetReturnsResponse" },
  returnsComponents,
);

export function parseGetReturnsResponse(
  status: number,
  input: unknown,
): GetReturnsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getReturnsResponse200Schema, input, "getReturns");
    default:
      return unexpectedYmSuccessStatus("getReturns", status);
  }
}
