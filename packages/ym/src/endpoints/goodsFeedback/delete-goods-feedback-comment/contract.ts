// Generated runtime response contract for this Yandex Market endpoint.
import { goodsFeedbackComponents } from "../../../contracts/goodsFeedback.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { DeleteGoodsFeedbackCommentResponse } from "./types.js";

const deleteGoodsFeedbackCommentResponse200Schema =
  createYmSchema<DeleteGoodsFeedbackCommentResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    goodsFeedbackComponents,
  );

export function parseDeleteGoodsFeedbackCommentResponse(
  status: number,
  input: unknown,
): DeleteGoodsFeedbackCommentResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        deleteGoodsFeedbackCommentResponse200Schema,
        input,
        "deleteGoodsFeedbackComment",
      );
    default:
      return unexpectedYmSuccessStatus("deleteGoodsFeedbackComment", status);
  }
}
