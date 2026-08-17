// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1FeedbacksCountUnansweredResponse } from "./types.js";

const getV1FeedbacksCountUnansweredResponse200Schema =
  createWbSchema<GetV1FeedbacksCountUnansweredResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            countUnanswered: { kind: "number", integer: true },
            countUnansweredToday: { kind: "number", integer: true },
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

export function parseGetV1FeedbacksCountUnansweredResponse(
  status: number,
  input: unknown,
): GetV1FeedbacksCountUnansweredResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1FeedbacksCountUnansweredResponse200Schema,
        input,
        "getV1FeedbacksCountUnanswered",
      );
    default:
      return unexpectedWbSuccessStatus("getV1FeedbacksCountUnanswered", status);
  }
}
