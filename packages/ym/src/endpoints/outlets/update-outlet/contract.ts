// Generated runtime response contract for this Yandex Market endpoint.
import { outletsComponents } from "../../../contracts/outlets.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateOutletResponse } from "./types.js";

const updateOutletResponse200Schema = createYmSchema<UpdateOutletResponse>(
  { kind: "ref", name: "EmptyApiResponse" },
  outletsComponents,
);

export function parseUpdateOutletResponse(
  status: number,
  input: unknown,
): UpdateOutletResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateOutletResponse200Schema,
        input,
        "updateOutlet",
      );
    default:
      return unexpectedYmSuccessStatus("updateOutlet", status);
  }
}
