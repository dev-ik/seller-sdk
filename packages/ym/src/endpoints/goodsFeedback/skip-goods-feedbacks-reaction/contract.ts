// Generated runtime response contract for this Yandex Market endpoint.
import { goodsFeedbackComponents } from "../../../contracts/goodsFeedback.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SkipGoodsFeedbacksReactionResponse } from "./types.js";

const skipGoodsFeedbacksReactionResponse200Schema =
  createYmSchema<SkipGoodsFeedbacksReactionResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    goodsFeedbackComponents,
  );

export function parseSkipGoodsFeedbacksReactionResponse(
  status: number,
  input: unknown,
): SkipGoodsFeedbacksReactionResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        skipGoodsFeedbacksReactionResponse200Schema,
        input,
        "skipGoodsFeedbacksReaction",
      );
    default:
      return unexpectedYmSuccessStatus("skipGoodsFeedbacksReaction", status);
  }
}
