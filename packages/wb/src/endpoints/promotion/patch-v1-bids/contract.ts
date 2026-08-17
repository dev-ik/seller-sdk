// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PatchV1BidsResponse } from "./types.js";

const patchV1BidsResponse200Schema = createWbSchema<PatchV1BidsResponse>(
  {
    kind: "object",
    properties: {
      bids: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            advert_id: { kind: "number", integer: true },
            nm_bids: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  nm_id: { kind: "number", integer: true },
                  bid_kopecks: { kind: "number", integer: true },
                  placement: { kind: "string" },
                },
                required: ["nm_id", "bid_kopecks", "placement"],
              },
            },
          },
          required: ["advert_id", "nm_bids"],
        },
      },
      currency: { kind: "string" },
    },
    required: ["bids", "currency"],
  },
  promotionComponents,
);

export function parsePatchV1BidsResponse(
  status: number,
  input: unknown,
): PatchV1BidsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        patchV1BidsResponse200Schema,
        input,
        "patchV1Bids",
      );
    default:
      return unexpectedWbSuccessStatus("patchV1Bids", status);
  }
}
