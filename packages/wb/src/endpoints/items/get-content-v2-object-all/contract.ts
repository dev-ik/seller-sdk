// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2ObjectAllResponse } from "./types.js";

const getContentV2ObjectAllResponse200Schema =
  createWbSchema<GetContentV2ObjectAllResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              subjectID: { kind: "number", integer: true },
              parentID: { kind: "number", integer: true },
              subjectName: { kind: "string" },
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

export function parseGetContentV2ObjectAllResponse(
  status: number,
  input: unknown,
): GetContentV2ObjectAllResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2ObjectAllResponse200Schema,
        input,
        "GET /content/v2/object/all",
      );
    default:
      return unexpectedWbSuccessStatus("GET /content/v2/object/all", status);
  }
}
