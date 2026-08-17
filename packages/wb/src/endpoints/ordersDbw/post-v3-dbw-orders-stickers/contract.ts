// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbwOrdersStickersResponse } from "./types.js";

const postV3DbwOrdersStickersResponse200Schema =
  createWbSchema<PostV3DbwOrdersStickersResponse>(
    {
      kind: "object",
      properties: {
        stickers: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              orderId: { kind: "number", integer: true },
              partA: { kind: "string" },
              partB: { kind: "string" },
              barcode: { kind: "string" },
              file: { kind: "string" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    ordersDbwComponents,
  );

export function parsePostV3DbwOrdersStickersResponse(
  status: number,
  input: unknown,
): PostV3DbwOrdersStickersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbwOrdersStickersResponse200Schema,
        input,
        "postV3DbwOrdersStickers",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbwOrdersStickers", status);
  }
}
