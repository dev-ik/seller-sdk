// Generated runtime response contract for this Yandex Market endpoint.
import { outletsComponents } from "../../../contracts/outlets.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { CreateOutletResponse } from "./types.js";

const createOutletResponse200Schema = createYmSchema<CreateOutletResponse>(
  { kind: "ref", name: "CreateOutletResponse" },
  outletsComponents,
);

export function parseCreateOutletResponse(
  status: number,
  input: unknown,
): CreateOutletResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        createOutletResponse200Schema,
        input,
        "createOutlet",
      );
    default:
      return unexpectedYmSuccessStatus("createOutlet", status);
  }
}
