// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersStickersResponse } from "./types.js";

const postV3DbsOrdersStickersResponse200Schema =
  createWbSchema<PostV3DbsOrdersStickersResponse>(
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
            required: ["barcode", "file", "orderId", "partA", "partB"],
          },
        },
      },
      required: [],
    },
    dbsComponents,
  );

export function parsePostV3DbsOrdersStickersResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersStickersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersStickersResponse200Schema,
        input,
        "postV3DbsOrdersStickers",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersStickers", status);
  }
}
