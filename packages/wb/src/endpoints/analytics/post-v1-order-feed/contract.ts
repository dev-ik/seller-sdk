// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1OrderFeedResponse } from "./types.js";

const postV1OrderFeedResponse200Schema =
  createWbSchema<PostV1OrderFeedResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "OrderFeedResponse" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV1OrderFeedResponse(
  status: number,
  input: unknown,
): PostV1OrderFeedResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1OrderFeedResponse200Schema,
        input,
        "postV1OrderFeed",
      );
    default:
      return unexpectedWbSuccessStatus("postV1OrderFeed", status);
  }
}
