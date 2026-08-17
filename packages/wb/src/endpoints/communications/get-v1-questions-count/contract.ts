// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1QuestionsCountResponse } from "./types.js";

const getV1QuestionsCountResponse200Schema =
  createWbSchema<GetV1QuestionsCountResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "number", integer: true },
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

export function parseGetV1QuestionsCountResponse(
  status: number,
  input: unknown,
): GetV1QuestionsCountResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1QuestionsCountResponse200Schema,
        input,
        "getV1QuestionsCount",
      );
    default:
      return unexpectedWbSuccessStatus("getV1QuestionsCount", status);
  }
}
