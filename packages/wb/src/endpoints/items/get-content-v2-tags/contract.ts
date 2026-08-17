// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2TagsResponse } from "./types.js";

const getContentV2TagsResponse200Schema =
  createWbSchema<GetContentV2TagsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            id: { kind: "number", integer: true },
            color: { kind: "string" },
            name: { kind: "string" },
          },
          required: [],
        },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
        additionalErrors: { kind: "string", nullable: true },
      },
      required: [],
    },
    itemsComponents,
  );

export function parseGetContentV2TagsResponse(
  status: number,
  input: unknown,
): GetContentV2TagsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2TagsResponse200Schema,
        input,
        "GET /content/v2/tags",
      );
    default:
      return unexpectedWbSuccessStatus("GET /content/v2/tags", status);
  }
}
