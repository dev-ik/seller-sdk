// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2GetCardsTrashResponse } from "./types.js";

const postContentV2GetCardsTrashResponse200Schema =
  createWbSchema<PostContentV2GetCardsTrashResponse>(
    {
      kind: "object",
      properties: {
        cards: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              nmID: { kind: "number", integer: true },
              vendorCode: { kind: "string" },
              kizMarked: { kind: "boolean" },
              subjectID: { kind: "number", integer: true },
              subjectName: { kind: "string" },
              photos: {
                kind: "array",
                items: {
                  kind: "object",
                  properties: {
                    big: { kind: "string" },
                    c246x328: { kind: "string" },
                    c516x688: { kind: "string" },
                    square: { kind: "string" },
                    tm: { kind: "string" },
                  },
                  required: [],
                },
              },
              video: { kind: "string" },
              wholesale: {
                kind: "object",
                properties: {
                  enabled: { kind: "boolean" },
                  quantum: { kind: "number" },
                },
                required: [],
              },
              sizes: {
                kind: "array",
                items: {
                  kind: "object",
                  properties: {
                    chrtID: { kind: "number", integer: true },
                    techSize: { kind: "string" },
                    wbSize: { kind: "string" },
                    skus: { kind: "array", items: { kind: "string" } },
                  },
                  required: [],
                },
              },
              dimensions: {
                kind: "object",
                properties: {
                  length: { kind: "number", integer: true },
                  width: { kind: "number", integer: true },
                  height: { kind: "number", integer: true },
                  weightBrutto: { kind: "number" },
                  isValid: { kind: "boolean" },
                },
                required: [],
              },
              characteristics: {
                kind: "array",
                items: {
                  kind: "object",
                  properties: {
                    id: { kind: "number", integer: true },
                    name: { kind: "string" },
                    value: { kind: "unknown" },
                  },
                  required: [],
                },
                nullable: true,
              },
              createdAt: { kind: "string" },
              trashedAt: { kind: "string" },
            },
            required: [],
          },
        },
        cursor: {
          kind: "object",
          properties: {
            trashedAt: { kind: "string" },
            nmID: { kind: "number", integer: true },
            total: { kind: "number", integer: true },
          },
          required: [],
        },
      },
      required: [],
    },
    itemsComponents,
  );

export function parsePostContentV2GetCardsTrashResponse(
  status: number,
  input: unknown,
): PostContentV2GetCardsTrashResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2GetCardsTrashResponse200Schema,
        input,
        "POST /content/v2/get/cards/trash",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /content/v2/get/cards/trash",
        status,
      );
  }
}
