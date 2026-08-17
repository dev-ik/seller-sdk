// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2CardsUploadAddResponse } from "./types.js";

const postContentV2CardsUploadAddResponse200Schema =
  createWbSchema<PostContentV2CardsUploadAddResponse>(
    { kind: "ref", name: "responseItemList" },
    itemsComponents,
  );

export function parsePostContentV2CardsUploadAddResponse(
  status: number,
  input: unknown,
): PostContentV2CardsUploadAddResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2CardsUploadAddResponse200Schema,
        input,
        "POST /content/v2/cards/upload/add",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /content/v2/cards/upload/add",
        status,
      );
  }
}
