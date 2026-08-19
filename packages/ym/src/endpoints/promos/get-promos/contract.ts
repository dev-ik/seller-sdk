// Generated runtime response contract for this Yandex Market endpoint.
import { promosComponents } from "../../../contracts/promos.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetPromosResponse } from "./types.js";

const getPromosResponse200Schema = createYmSchema<GetPromosResponse>(
  { kind: "ref", name: "GetPromosResponse" },
  promosComponents,
);

export function parseGetPromosResponse(
  status: number,
  input: unknown,
): GetPromosResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getPromosResponse200Schema, input, "getPromos");
    default:
      return unexpectedYmSuccessStatus("getPromos", status);
  }
}
