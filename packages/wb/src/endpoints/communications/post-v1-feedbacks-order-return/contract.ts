// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1FeedbacksOrderReturnResponse } from "./types.js";

const postV1FeedbacksOrderReturnResponse200Schema =
  createWbSchema<PostV1FeedbacksOrderReturnResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "object", properties: {}, required: [], nullable: true },
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

export function parsePostV1FeedbacksOrderReturnResponse(
  status: number,
  input: unknown,
): PostV1FeedbacksOrderReturnResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1FeedbacksOrderReturnResponse200Schema,
        input,
        "postV1FeedbacksOrderReturn",
      );
    default:
      return unexpectedWbSuccessStatus("postV1FeedbacksOrderReturn", status);
  }
}
