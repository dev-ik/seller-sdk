// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2ObjectParentAllResponse } from "./types.js";

const getContentV2ObjectParentAllResponse200Schema =
  createWbSchema<GetContentV2ObjectParentAllResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              name: { kind: "string" },
              id: { kind: "number", integer: true },
              isVisible: { kind: "boolean" },
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

export function parseGetContentV2ObjectParentAllResponse(
  status: number,
  input: unknown,
): GetContentV2ObjectParentAllResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2ObjectParentAllResponse200Schema,
        input,
        "GET /content/v2/object/parent/all",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /content/v2/object/parent/all",
        status,
      );
  }
}
