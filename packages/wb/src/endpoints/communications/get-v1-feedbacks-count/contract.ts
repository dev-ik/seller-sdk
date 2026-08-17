// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1FeedbacksCountResponse } from "./types.js";

const getV1FeedbacksCountResponse200Schema =
  createWbSchema<GetV1FeedbacksCountResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "number", integer: true },
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

export function parseGetV1FeedbacksCountResponse(
  status: number,
  input: unknown,
): GetV1FeedbacksCountResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1FeedbacksCountResponse200Schema,
        input,
        "getV1FeedbacksCount",
      );
    default:
      return unexpectedWbSuccessStatus("getV1FeedbacksCount", status);
  }
}
