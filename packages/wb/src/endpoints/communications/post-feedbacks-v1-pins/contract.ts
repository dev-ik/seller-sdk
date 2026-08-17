// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostFeedbacksV1PinsResponse } from "./types.js";

const postFeedbacksV1PinsResponse200Schema =
  createWbSchema<PostFeedbacksV1PinsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              feedbackId: { kind: "string" },
              pinId: { kind: "number", integer: true },
              pinMethod: { kind: "string", enum: ["tariff", "subscription"] },
              pinOn: { kind: "string", enum: ["nm", "imt"] },
              isErrors: { kind: "boolean" },
              errors: {
                kind: "array",
                items: { kind: "ref", name: "openapi.ResultErr" },
              },
            },
            required: ["feedbackId", "isErrors", "pinMethod", "pinOn"],
          },
        },
      },
      required: ["data"],
    },
    communicationsComponents,
  );

export function parsePostFeedbacksV1PinsResponse(
  status: number,
  input: unknown,
): PostFeedbacksV1PinsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postFeedbacksV1PinsResponse200Schema,
        input,
        "postFeedbacksV1Pins",
      );
    default:
      return unexpectedWbSuccessStatus("postFeedbacksV1Pins", status);
  }
}
