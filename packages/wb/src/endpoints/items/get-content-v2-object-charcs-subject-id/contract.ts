// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2ObjectCharcsSubjectIdResponse } from "./types.js";

const getContentV2ObjectCharcsSubjectIdResponse200Schema =
  createWbSchema<GetContentV2ObjectCharcsSubjectIdResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              charcID: { kind: "number", integer: true },
              subjectName: { kind: "string" },
              subjectID: { kind: "number", integer: true },
              name: { kind: "string" },
              required: { kind: "boolean" },
              unitName: { kind: "string" },
              maxCount: { kind: "number", integer: true },
              popular: { kind: "boolean" },
              charcType: { kind: "number", integer: true },
              hasFilter: { kind: "boolean" },
              isVariable: { kind: "boolean" },
              existNamedField: { kind: "boolean" },
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

export function parseGetContentV2ObjectCharcsSubjectIdResponse(
  status: number,
  input: unknown,
): GetContentV2ObjectCharcsSubjectIdResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2ObjectCharcsSubjectIdResponse200Schema,
        input,
        "GET /content/v2/object/charcs/{subjectId}",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /content/v2/object/charcs/{subjectId}",
        status,
      );
  }
}
