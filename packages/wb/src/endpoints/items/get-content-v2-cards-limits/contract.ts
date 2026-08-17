// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2CardsLimitsResponse } from "./types.js";

const getContentV2CardsLimitsResponse200Schema =
  createWbSchema<GetContentV2CardsLimitsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            freeLimits: { kind: "number", integer: true },
            paidLimits: { kind: "number", integer: true },
          },
          required: [],
        },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
        additionalErrors: { kind: "string", nullable: true },
      },
      required: [],
    },
    itemsComponents,
  );

export function parseGetContentV2CardsLimitsResponse(
  status: number,
  input: unknown,
): GetContentV2CardsLimitsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2CardsLimitsResponse200Schema,
        input,
        "GET /content/v2/cards/limits",
      );
    default:
      return unexpectedWbSuccessStatus("GET /content/v2/cards/limits", status);
  }
}
