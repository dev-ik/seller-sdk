// Generated runtime response contract for this Yandex Market endpoint.
import { returnsComponents } from "../../../contracts/returns.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SubmitReturnDecisionResponse } from "./types.js";

const submitReturnDecisionResponse200Schema =
  createYmSchema<SubmitReturnDecisionResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    returnsComponents,
  );

export function parseSubmitReturnDecisionResponse(
  status: number,
  input: unknown,
): SubmitReturnDecisionResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        submitReturnDecisionResponse200Schema,
        input,
        "submitReturnDecision",
      );
    default:
      return unexpectedYmSuccessStatus("submitReturnDecision", status);
  }
}
