// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1NewFeedbacksQuestionsResponse } from "./types.js";

const getV1NewFeedbacksQuestionsResponse200Schema =
  createWbSchema<GetV1NewFeedbacksQuestionsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            hasNewQuestions: { kind: "boolean" },
            hasNewFeedbacks: { kind: "boolean" },
          },
          required: [],
        },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
        additionalErrors: {
          kind: "array",
          items: { kind: "string" },
          nullable: true,
        },
      },
      required: [],
    },
    communicationsComponents,
  );

export function parseGetV1NewFeedbacksQuestionsResponse(
  status: number,
  input: unknown,
): GetV1NewFeedbacksQuestionsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1NewFeedbacksQuestionsResponse200Schema,
        input,
        "getV1NewFeedbacksQuestions",
      );
    default:
      return unexpectedWbSuccessStatus("getV1NewFeedbacksQuestions", status);
  }
}
