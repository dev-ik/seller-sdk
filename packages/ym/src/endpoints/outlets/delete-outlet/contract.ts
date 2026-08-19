// Generated runtime response contract for this Yandex Market endpoint.
import { outletsComponents } from "../../../contracts/outlets.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { DeleteOutletResponse } from "./types.js";

const deleteOutletResponse200Schema = createYmSchema<DeleteOutletResponse>(
  { kind: "ref", name: "EmptyApiResponse" },
  outletsComponents,
);

export function parseDeleteOutletResponse(
  status: number,
  input: unknown,
): DeleteOutletResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        deleteOutletResponse200Schema,
        input,
        "deleteOutlet",
      );
    default:
      return unexpectedYmSuccessStatus("deleteOutlet", status);
  }
}
