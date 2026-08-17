// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetFeedbacksV1PinsResponse } from "./types.js";

const getFeedbacksV1PinsResponse200Schema =
  createWbSchema<GetFeedbacksV1PinsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "array",
          items: { kind: "ref", name: "openapi.PinnedReviewItemResult" },
        },
        next: { kind: "number", integer: true },
      },
      required: ["data"],
    },
    communicationsComponents,
  );

export function parseGetFeedbacksV1PinsResponse(
  status: number,
  input: unknown,
): GetFeedbacksV1PinsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getFeedbacksV1PinsResponse200Schema,
        input,
        "getFeedbacksV1Pins",
      );
    default:
      return unexpectedWbSuccessStatus("getFeedbacksV1Pins", status);
  }
}
