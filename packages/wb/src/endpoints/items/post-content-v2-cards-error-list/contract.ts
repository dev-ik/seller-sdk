// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2CardsErrorListResponse } from "./types.js";

const postContentV2CardsErrorListResponse200Schema =
  createWbSchema<PostContentV2CardsErrorListResponse>(
    { kind: "ref", name: "responsePublicViewerPublicErrorsTableListV2" },
    itemsComponents,
  );

export function parsePostContentV2CardsErrorListResponse(
  status: number,
  input: unknown,
): PostContentV2CardsErrorListResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2CardsErrorListResponse200Schema,
        input,
        "POST /content/v2/cards/error/list",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /content/v2/cards/error/list",
        status,
      );
  }
}
