// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1FeedbacksResponse } from "./types.js";

const getV1FeedbacksResponse200Schema = createWbSchema<GetV1FeedbacksResponse>(
  {
    kind: "object",
    properties: {
      data: {
        kind: "object",
        properties: {
          countUnanswered: { kind: "number", integer: true },
          countArchive: { kind: "number", integer: true },
          feedbacks: { kind: "ref", name: "responseFeedback" },
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

export function parseGetV1FeedbacksResponse(
  status: number,
  input: unknown,
): GetV1FeedbacksResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1FeedbacksResponse200Schema,
        input,
        "getV1Feedbacks",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Feedbacks", status);
  }
}
