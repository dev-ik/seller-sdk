// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV3MediaFileResponse } from "./types.js";

const postContentV3MediaFileResponse200Schema =
  createWbSchema<PostContentV3MediaFileResponse>(
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

export function parsePostContentV3MediaFileResponse(
  status: number,
  input: unknown,
): PostContentV3MediaFileResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV3MediaFileResponse200Schema,
        input,
        "POST /content/v3/media/file",
      );
    default:
      return unexpectedWbSuccessStatus("POST /content/v3/media/file", status);
  }
}
