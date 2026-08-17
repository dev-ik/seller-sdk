// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2CardsUploadResponse } from "./types.js";

const postContentV2CardsUploadResponse200Schema =
  createWbSchema<PostContentV2CardsUploadResponse>(
    { kind: "ref", name: "responseItemList" },
    itemsComponents,
  );

export function parsePostContentV2CardsUploadResponse(
  status: number,
  input: unknown,
): PostContentV2CardsUploadResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2CardsUploadResponse200Schema,
        input,
        "POST /content/v2/cards/upload",
      );
    default:
      return unexpectedWbSuccessStatus("POST /content/v2/cards/upload", status);
  }
}
