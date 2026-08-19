// Generated runtime response contract for this Yandex Market endpoint.
import { outletsComponents } from "../../../contracts/outlets.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOutletResponse } from "./types.js";

const getOutletResponse200Schema = createYmSchema<GetOutletResponse>(
  { kind: "ref", name: "GetOutletResponse" },
  outletsComponents,
);

export function parseGetOutletResponse(
  status: number,
  input: unknown,
): GetOutletResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getOutletResponse200Schema, input, "getOutlet");
    default:
      return unexpectedYmSuccessStatus("getOutlet", status);
  }
}
