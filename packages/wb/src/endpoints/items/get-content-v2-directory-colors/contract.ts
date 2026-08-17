// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2DirectoryColorsResponse } from "./types.js";

const getContentV2DirectoryColorsResponse200Schema =
  createWbSchema<GetContentV2DirectoryColorsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              name: { kind: "string" },
              parentName: { kind: "string" },
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

export function parseGetContentV2DirectoryColorsResponse(
  status: number,
  input: unknown,
): GetContentV2DirectoryColorsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2DirectoryColorsResponse200Schema,
        input,
        "GET /content/v2/directory/colors",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /content/v2/directory/colors",
        status,
      );
  }
}
