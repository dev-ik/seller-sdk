// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1RecommendationsSetResponse } from "./types.js";

const postV1RecommendationsSetResponse200Schema =
  createWbSchema<PostV1RecommendationsSetResponse>(
    { kind: "ref", name: "SetRecomRes" },
    itemsComponents,
  );
const postV1RecommendationsSetResponse208Schema =
  createWbSchema<PostV1RecommendationsSetResponse>(
    { kind: "ref", name: "response208SetRecom" },
    itemsComponents,
  );

export function parsePostV1RecommendationsSetResponse(
  status: number,
  input: unknown,
): PostV1RecommendationsSetResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1RecommendationsSetResponse200Schema,
        input,
        "postV1RecommendationsSet",
      );
    case 208:
      return parseWbResponse(
        postV1RecommendationsSetResponse208Schema,
        input,
        "postV1RecommendationsSet",
      );
    default:
      return unexpectedWbSuccessStatus("postV1RecommendationsSet", status);
  }
}
