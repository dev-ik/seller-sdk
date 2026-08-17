// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetFeedbacksV1PinsLimitsResponse } from "./types.js";

const getFeedbacksV1PinsLimitsResponse200Schema =
  createWbSchema<GetFeedbacksV1PinsLimitsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            subscription: {
              kind: "object",
              properties: {
                perUnitLimit: { kind: "number", integer: true },
                remaining: { kind: "number", integer: true },
                totalLimit: { kind: "number", integer: true },
                unlimited: { kind: "boolean" },
                used: { kind: "number", integer: true },
              },
              required: [
                "perUnitLimit",
                "remaining",
                "totalLimit",
                "unlimited",
                "used",
              ],
              nullable: true,
            },
            tariff: {
              kind: "object",
              properties: {
                perUnitLimit: { kind: "number", integer: true },
                remaining: { kind: "number", integer: true },
                totalLimit: { kind: "number", integer: true },
                unlimited: { kind: "boolean" },
                used: { kind: "number", integer: true },
              },
              required: [
                "perUnitLimit",
                "remaining",
                "totalLimit",
                "unlimited",
                "used",
              ],
              nullable: true,
            },
          },
          required: [],
        },
      },
      required: ["data"],
    },
    communicationsComponents,
  );

export function parseGetFeedbacksV1PinsLimitsResponse(
  status: number,
  input: unknown,
): GetFeedbacksV1PinsLimitsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getFeedbacksV1PinsLimitsResponse200Schema,
        input,
        "getFeedbacksV1PinsLimits",
      );
    default:
      return unexpectedWbSuccessStatus("getFeedbacksV1PinsLimits", status);
  }
}
