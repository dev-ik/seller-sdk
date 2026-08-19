// Generated runtime response contract for this Yandex Market endpoint.
import { goodsFeedbackComponents } from "../../../contracts/goodsFeedback.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateGoodsFeedbackCommentResponse } from "./types.js";

const updateGoodsFeedbackCommentResponse200Schema =
  createYmSchema<UpdateGoodsFeedbackCommentResponse>(
    { kind: "ref", name: "UpdateGoodsFeedbackCommentResponse" },
    goodsFeedbackComponents,
  );

export function parseUpdateGoodsFeedbackCommentResponse(
  status: number,
  input: unknown,
): UpdateGoodsFeedbackCommentResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateGoodsFeedbackCommentResponse200Schema,
        input,
        "updateGoodsFeedbackComment",
      );
    default:
      return unexpectedYmSuccessStatus("updateGoodsFeedbackComment", status);
  }
}
