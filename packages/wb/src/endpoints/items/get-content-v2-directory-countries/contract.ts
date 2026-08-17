// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2DirectoryCountriesResponse } from "./types.js";

const getContentV2DirectoryCountriesResponse200Schema =
  createWbSchema<GetContentV2DirectoryCountriesResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              id: { kind: "number", integer: true },
              name: { kind: "string" },
              fullName: { kind: "string" },
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

export function parseGetContentV2DirectoryCountriesResponse(
  status: number,
  input: unknown,
): GetContentV2DirectoryCountriesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2DirectoryCountriesResponse200Schema,
        input,
        "GET /content/v2/directory/countries",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /content/v2/directory/countries",
        status,
      );
  }
}
