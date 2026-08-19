// Generated runtime response contract for this Yandex Market endpoint.
import { returnsComponents } from "../../../contracts/returns.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetReturnAvailableDecisionsResponse } from "./types.js";

const getReturnAvailableDecisionsResponse200Schema =
  createYmSchema<GetReturnAvailableDecisionsResponse>(
    { kind: "ref", name: "GetReturnAvailableDecisionsResponse" },
    returnsComponents,
  );

export function parseGetReturnAvailableDecisionsResponse(
  status: number,
  input: unknown,
): GetReturnAvailableDecisionsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getReturnAvailableDecisionsResponse200Schema,
        input,
        "getReturnAvailableDecisions",
      );
    default:
      return unexpectedYmSuccessStatus("getReturnAvailableDecisions", status);
  }
}
