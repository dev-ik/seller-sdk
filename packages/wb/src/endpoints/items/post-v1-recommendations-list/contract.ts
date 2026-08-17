// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1RecommendationsListResponse } from "./types.js";

const postV1RecommendationsListResponse200Schema =
  createWbSchema<PostV1RecommendationsListResponse>(
    { kind: "ref", name: "GetRecomRes" },
    itemsComponents,
  );

export function parsePostV1RecommendationsListResponse(
  status: number,
  input: unknown,
): PostV1RecommendationsListResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1RecommendationsListResponse200Schema,
        input,
        "postV1RecommendationsList",
      );
    default:
      return unexpectedWbSuccessStatus("postV1RecommendationsList", status);
  }
}
