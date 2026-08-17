// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2CardsUpdateResponse } from "./types.js";

const postContentV2CardsUpdateResponse200Schema =
  createWbSchema<PostContentV2CardsUpdateResponse>(
    { kind: "ref", name: "responseItemList" },
    itemsComponents,
  );

export function parsePostContentV2CardsUpdateResponse(
  status: number,
  input: unknown,
): PostContentV2CardsUpdateResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2CardsUpdateResponse200Schema,
        input,
        "POST /content/v2/cards/update",
      );
    default:
      return unexpectedWbSuccessStatus("POST /content/v2/cards/update", status);
  }
}
