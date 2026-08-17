// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2CardsDeleteTrashResponse } from "./types.js";

const postContentV2CardsDeleteTrashResponse200Schema =
  createWbSchema<PostContentV2CardsDeleteTrashResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "object", properties: {}, required: [], nullable: true },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
        additionalErrors: {
          kind: "object",
          properties: {},
          required: [],
          nullable: true,
        },
      },
      required: [],
    },
    itemsComponents,
  );

export function parsePostContentV2CardsDeleteTrashResponse(
  status: number,
  input: unknown,
): PostContentV2CardsDeleteTrashResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2CardsDeleteTrashResponse200Schema,
        input,
        "POST /content/v2/cards/delete/trash",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /content/v2/cards/delete/trash",
        status,
      );
  }
}
