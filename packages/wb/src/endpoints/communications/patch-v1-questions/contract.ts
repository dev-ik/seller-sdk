// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PatchV1QuestionsResponse } from "./types.js";

const patchV1QuestionsResponse200Schema =
  createWbSchema<PatchV1QuestionsResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "object", properties: {}, required: [], nullable: true },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
        additionalErrors: {
          kind: "array",
          items: { kind: "string" },
          nullable: true,
        },
      },
      required: [],
    },
    communicationsComponents,
  );

export function parsePatchV1QuestionsResponse(
  status: number,
  input: unknown,
): PatchV1QuestionsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        patchV1QuestionsResponse200Schema,
        input,
        "patchV1Questions",
      );
    default:
      return unexpectedWbSuccessStatus("patchV1Questions", status);
  }
}
