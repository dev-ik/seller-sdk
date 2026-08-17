// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1QuestionsCountUnansweredResponse } from "./types.js";

const getV1QuestionsCountUnansweredResponse200Schema =
  createWbSchema<GetV1QuestionsCountUnansweredResponse>(
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

export function parseGetV1QuestionsCountUnansweredResponse(
  status: number,
  input: unknown,
): GetV1QuestionsCountUnansweredResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1QuestionsCountUnansweredResponse200Schema,
        input,
        "getV1QuestionsCountUnanswered",
      );
    default:
      return unexpectedWbSuccessStatus("getV1QuestionsCountUnanswered", status);
  }
}
