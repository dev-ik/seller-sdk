// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3OrdersStickersCrossBorderResponse } from "./types.js";

const postApiV3OrdersStickersCrossBorderResponse200Schema =
  createWbSchema<PostApiV3OrdersStickersCrossBorderResponse>(
    {
      kind: "object",
      properties: {
        stickers: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              orderId: { kind: "number", integer: true },
              status: {
                kind: "string",
                enum: ["awaitingTrackNumber", "ready"],
              },
              parcelId: { kind: "string" },
              file: { kind: "string" },
              partA: { kind: "string" },
              partB: { kind: "string" },
              barcode: { kind: "string" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    ordersFbsComponents,
  );

export function parsePostApiV3OrdersStickersCrossBorderResponse(
  status: number,
  input: unknown,
): PostApiV3OrdersStickersCrossBorderResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV3OrdersStickersCrossBorderResponse200Schema,
        input,
        "POST /api/v3/orders/stickers/cross-border",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /api/v3/orders/stickers/cross-border",
        status,
      );
  }
}
