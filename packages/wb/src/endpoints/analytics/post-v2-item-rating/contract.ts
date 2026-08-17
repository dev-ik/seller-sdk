// Generated runtime response contract for this Wildberries endpoint.
import { analyticsComponents } from "../../../contracts/analytics.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV2ItemRatingResponse } from "./types.js";

const postV2ItemRatingResponse200Schema =
  createWbSchema<PostV2ItemRatingResponse>(
    {
      kind: "object",
      properties: { data: { kind: "ref", name: "ItemRatingResponse" } },
      required: ["data"],
    },
    analyticsComponents,
  );

export function parsePostV2ItemRatingResponse(
  status: number,
  input: unknown,
): PostV2ItemRatingResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV2ItemRatingResponse200Schema,
        input,
        "postV2ItemRating",
      );
    default:
      return unexpectedWbSuccessStatus("postV2ItemRating", status);
  }
}
