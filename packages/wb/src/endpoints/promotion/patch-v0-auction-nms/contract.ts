// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PatchV0AuctionNmsResponse } from "./types.js";

const patchV0AuctionNmsResponse200Schema =
  createWbSchema<PatchV0AuctionNmsResponse>(
    {
      kind: "object",
      properties: {
        nms: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              advert_id: { kind: "number", integer: true },
              nms: {
                kind: "object",
                properties: {
                  added: {
                    kind: "array",
                    items: { kind: "number", integer: true },
                  },
                  deleted: {
                    kind: "array",
                    items: { kind: "number", integer: true },
                  },
                },
                required: ["added", "deleted"],
              },
            },
            required: ["advert_id", "nms"],
          },
        },
      },
      required: ["nms"],
    },
    promotionComponents,
  );

export function parsePatchV0AuctionNmsResponse(
  status: number,
  input: unknown,
): PatchV0AuctionNmsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        patchV0AuctionNmsResponse200Schema,
        input,
        "patchV0AuctionNms",
      );
    default:
      return unexpectedWbSuccessStatus("patchV0AuctionNms", status);
  }
}
