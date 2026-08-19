// Generated runtime response contract for this Yandex Market endpoint.
import { returnsComponents } from "../../../contracts/returns.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { CancelReturnResponse } from "./types.js";

const cancelReturnResponse200Schema = createYmSchema<CancelReturnResponse>(
  { kind: "ref", name: "CancelReturnResponse" },
  returnsComponents,
);

export function parseCancelReturnResponse(
  status: number,
  input: unknown,
): CancelReturnResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        cancelReturnResponse200Schema,
        input,
        "cancelReturn",
      );
    default:
      return unexpectedYmSuccessStatus("cancelReturn", status);
  }
}
