// Generated runtime response contract for this Yandex Market endpoint.
import { returnsComponents } from "../../../contracts/returns.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { CreateReturnResponse } from "./types.js";

const createReturnResponse200Schema = createYmSchema<CreateReturnResponse>(
  { kind: "ref", name: "CreateReturnResponse" },
  returnsComponents,
);

export function parseCreateReturnResponse(
  status: number,
  input: unknown,
): CreateReturnResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        createReturnResponse200Schema,
        input,
        "createReturn",
      );
    default:
      return unexpectedYmSuccessStatus("createReturn", status);
  }
}
