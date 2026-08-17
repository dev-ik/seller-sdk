// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2TagResponse } from "./types.js";

const postContentV2TagResponse200Schema =
  createWbSchema<PostContentV2TagResponse>(
    { kind: "ref", name: "responseContentError" },
    itemsComponents,
  );

export function parsePostContentV2TagResponse(
  status: number,
  input: unknown,
): PostContentV2TagResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2TagResponse200Schema,
        input,
        "POST /content/v2/tag",
      );
    default:
      return unexpectedWbSuccessStatus("POST /content/v2/tag", status);
  }
}
