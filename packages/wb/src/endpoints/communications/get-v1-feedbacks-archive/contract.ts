// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1FeedbacksArchiveResponse } from "./types.js";

const getV1FeedbacksArchiveResponse200Schema =
  createWbSchema<GetV1FeedbacksArchiveResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: { feedbacks: { kind: "ref", name: "responseFeedback" } },
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

export function parseGetV1FeedbacksArchiveResponse(
  status: number,
  input: unknown,
): GetV1FeedbacksArchiveResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1FeedbacksArchiveResponse200Schema,
        input,
        "getV1FeedbacksArchive",
      );
    default:
      return unexpectedWbSuccessStatus("getV1FeedbacksArchive", status);
  }
}
