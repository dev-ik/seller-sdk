// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2DirectorySeasonsResponse } from "./types.js";

const getContentV2DirectorySeasonsResponse200Schema =
  createWbSchema<GetContentV2DirectorySeasonsResponse>(
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

export function parseGetContentV2DirectorySeasonsResponse(
  status: number,
  input: unknown,
): GetContentV2DirectorySeasonsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2DirectorySeasonsResponse200Schema,
        input,
        "GET /content/v2/directory/seasons",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /content/v2/directory/seasons",
        status,
      );
  }
}
