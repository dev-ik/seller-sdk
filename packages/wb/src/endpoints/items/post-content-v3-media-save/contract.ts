// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV3MediaSaveResponse } from "./types.js";

const postContentV3MediaSaveResponse200Schema =
  createWbSchema<PostContentV3MediaSaveResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "object", properties: {}, required: [] },
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

export function parsePostContentV3MediaSaveResponse(
  status: number,
  input: unknown,
): PostContentV3MediaSaveResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV3MediaSaveResponse200Schema,
        input,
        "POST /content/v3/media/save",
      );
    default:
      return unexpectedWbSuccessStatus("POST /content/v3/media/save", status);
  }
}
