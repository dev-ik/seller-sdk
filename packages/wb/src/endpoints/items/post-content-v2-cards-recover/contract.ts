// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2CardsRecoverResponse } from "./types.js";

const postContentV2CardsRecoverResponse200Schema =
  createWbSchema<PostContentV2CardsRecoverResponse>(
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

export function parsePostContentV2CardsRecoverResponse(
  status: number,
  input: unknown,
): PostContentV2CardsRecoverResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2CardsRecoverResponse200Schema,
        input,
        "POST /content/v2/cards/recover",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /content/v2/cards/recover",
        status,
      );
  }
}
