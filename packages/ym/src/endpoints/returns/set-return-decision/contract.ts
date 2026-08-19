// Generated runtime response contract for this Yandex Market endpoint.
import { returnsComponents } from "../../../contracts/returns.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SetReturnDecisionResponse } from "./types.js";

const setReturnDecisionResponse200Schema =
  createYmSchema<SetReturnDecisionResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    returnsComponents,
  );

export function parseSetReturnDecisionResponse(
  status: number,
  input: unknown,
): SetReturnDecisionResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        setReturnDecisionResponse200Schema,
        input,
        "setReturnDecision",
      );
    default:
      return unexpectedYmSuccessStatus("setReturnDecision", status);
  }
}
