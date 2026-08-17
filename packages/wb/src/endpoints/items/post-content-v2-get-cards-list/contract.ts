// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2GetCardsListResponse } from "./types.js";

const postContentV2GetCardsListResponse200Schema =
  createWbSchema<PostContentV2GetCardsListResponse>(
    {
      kind: "object",
      properties: {
        cards: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              nmID: { kind: "number", integer: true },
              imtID: { kind: "number", integer: true },
              nmUUID: { kind: "string" },
              subjectID: { kind: "number", integer: true },
              subjectName: { kind: "string" },
              vendorCode: { kind: "string" },
              brand: { kind: "string" },
              title: { kind: "string" },
              description: { kind: "string" },
              needKiz: { kind: "boolean" },
              kizMarked: { kind: "boolean" },
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
              tags: {
                kind: "array",
                items: {
                  kind: "object",
                  properties: {
                    id: { kind: "number", integer: true },
                    name: { kind: "string" },
                    color: { kind: "string" },
                  },
                  required: [],
                },
              },
              createdAt: { kind: "string" },
              updatedAt: { kind: "string" },
            },
            required: [],
          },
        },
        cursor: {
          kind: "object",
          properties: {
            updatedAt: { kind: "string" },
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

export function parsePostContentV2GetCardsListResponse(
  status: number,
  input: unknown,
): PostContentV2GetCardsListResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2GetCardsListResponse200Schema,
        input,
        "POST /content/v2/get/cards/list",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /content/v2/get/cards/list",
        status,
      );
  }
}
