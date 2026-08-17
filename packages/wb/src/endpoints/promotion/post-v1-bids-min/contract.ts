// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1BidsMinResponse } from "./types.js";

const postV1BidsMinResponse200Schema = createWbSchema<PostV1BidsMinResponse>(
  {
    kind: "object",
    properties: {
      bids: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            bids: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  currency: { kind: "string" },
                  type: { kind: "ref", name: "PlacementType" },
                  value: { kind: "number", integer: true },
                },
                required: ["type", "value", "currency"],
              },
            },
            nm_id: { kind: "number", integer: true },
          },
          required: ["nm_id", "bids"],
        },
      },
    },
    required: ["bids"],
  },
  promotionComponents,
);

export function parsePostV1BidsMinResponse(
  status: number,
  input: unknown,
): PostV1BidsMinResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1BidsMinResponse200Schema,
        input,
        "postV1BidsMin",
      );
    default:
      return unexpectedWbSuccessStatus("postV1BidsMin", status);
  }
}
