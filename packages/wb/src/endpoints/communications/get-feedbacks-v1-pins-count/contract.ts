// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetFeedbacksV1PinsCountResponse } from "./types.js";

const getFeedbacksV1PinsCountResponse200Schema =
  createWbSchema<GetFeedbacksV1PinsCountResponse>(
    {
      kind: "object",
      properties: { data: { kind: "number", integer: true } },
      required: ["data"],
    },
    communicationsComponents,
  );

export function parseGetFeedbacksV1PinsCountResponse(
  status: number,
  input: unknown,
): GetFeedbacksV1PinsCountResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getFeedbacksV1PinsCountResponse200Schema,
        input,
        "getFeedbacksV1PinsCount",
      );
    default:
      return unexpectedWbSuccessStatus("getFeedbacksV1PinsCount", status);
  }
}
