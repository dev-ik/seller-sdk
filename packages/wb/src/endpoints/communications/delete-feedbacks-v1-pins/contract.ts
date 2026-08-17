// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { DeleteFeedbacksV1PinsResponse } from "./types.js";

const deleteFeedbacksV1PinsResponse200Schema =
  createWbSchema<DeleteFeedbacksV1PinsResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "array", items: { kind: "number", integer: true } },
      },
      required: ["data"],
    },
    communicationsComponents,
  );

export function parseDeleteFeedbacksV1PinsResponse(
  status: number,
  input: unknown,
): DeleteFeedbacksV1PinsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        deleteFeedbacksV1PinsResponse200Schema,
        input,
        "deleteFeedbacksV1Pins",
      );
    default:
      return unexpectedWbSuccessStatus("deleteFeedbacksV1Pins", status);
  }
}
