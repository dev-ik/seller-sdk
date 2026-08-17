// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2DirectoryKindsResponse } from "./types.js";

const getContentV2DirectoryKindsResponse200Schema =
  createWbSchema<GetContentV2DirectoryKindsResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "array", items: { kind: "string" } },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
        additionalErrors: { kind: "string", nullable: true },
      },
      required: [],
    },
    itemsComponents,
  );

export function parseGetContentV2DirectoryKindsResponse(
  status: number,
  input: unknown,
): GetContentV2DirectoryKindsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2DirectoryKindsResponse200Schema,
        input,
        "GET /content/v2/directory/kinds",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /content/v2/directory/kinds",
        status,
      );
  }
}
