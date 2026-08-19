// Generated runtime response contract for this Yandex Market endpoint.
import { returnsComponents } from "../../../contracts/returns.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetReturnResponse } from "./types.js";

const getReturnResponse200Schema = createYmSchema<GetReturnResponse>(
  { kind: "ref", name: "GetReturnResponse" },
  returnsComponents,
);

export function parseGetReturnResponse(
  status: number,
  input: unknown,
): GetReturnResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getReturnResponse200Schema, input, "getReturn");
    default:
      return unexpectedYmSuccessStatus("getReturn", status);
  }
}
