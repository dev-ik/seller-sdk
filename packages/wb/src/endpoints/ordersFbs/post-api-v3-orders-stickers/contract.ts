// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3OrdersStickersResponse } from "./types.js";

const postApiV3OrdersStickersResponse200Schema =
  createWbSchema<PostApiV3OrdersStickersResponse>(
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
    ordersFbsComponents,
  );

export function parsePostApiV3OrdersStickersResponse(
  status: number,
  input: unknown,
): PostApiV3OrdersStickersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV3OrdersStickersResponse200Schema,
        input,
        "POST /api/v3/orders/stickers",
      );
    default:
      return unexpectedWbSuccessStatus("POST /api/v3/orders/stickers", status);
  }
}
