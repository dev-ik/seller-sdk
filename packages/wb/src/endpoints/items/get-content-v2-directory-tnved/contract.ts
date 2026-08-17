// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2DirectoryTnvedResponse } from "./types.js";

const getContentV2DirectoryTnvedResponse200Schema =
  createWbSchema<GetContentV2DirectoryTnvedResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              tnved: { kind: "string" },
              isKiz: { kind: "boolean" },
            },
            required: [],
          },
        },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
        additionalErrors: { kind: "string", nullable: true },
      },
      required: [],
    },
    itemsComponents,
  );

export function parseGetContentV2DirectoryTnvedResponse(
  status: number,
  input: unknown,
): GetContentV2DirectoryTnvedResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2DirectoryTnvedResponse200Schema,
        input,
        "GET /content/v2/directory/tnved",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /content/v2/directory/tnved",
        status,
      );
  }
}
