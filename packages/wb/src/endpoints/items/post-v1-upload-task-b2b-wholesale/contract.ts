// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1UploadTaskB2bWholesaleResponse } from "./types.js";

const postV1UploadTaskB2bWholesaleResponse200Schema =
  createWbSchema<PostV1UploadTaskB2bWholesaleResponse>(
    {
      kind: "object",
      properties: {
        id: { kind: "number", integer: true },
        alreadyExists: { kind: "boolean" },
        results: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              nmId: { kind: "number", integer: true },
              success: { kind: "boolean" },
              error: {
                kind: "object",
                properties: {
                  status: { kind: "number", integer: true },
                  title: { kind: "string" },
                  detail: { kind: "string" },
                },
                required: ["status", "title", "detail"],
              },
            },
            required: ["nmId", "success"],
          },
        },
      },
      required: ["id", "alreadyExists", "results"],
    },
    itemsComponents,
  );
const postV1UploadTaskB2bWholesaleResponse208Schema =
  createWbSchema<PostV1UploadTaskB2bWholesaleResponse>(
    {
      kind: "object",
      properties: {
        status: { kind: "number", integer: true },
        title: { kind: "string" },
        detail: { kind: "string" },
        requestId: { kind: "string" },
        origin: { kind: "string" },
      },
      required: ["status", "title", "detail", "requestId", "origin"],
    },
    itemsComponents,
  );

export function parsePostV1UploadTaskB2bWholesaleResponse(
  status: number,
  input: unknown,
): PostV1UploadTaskB2bWholesaleResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1UploadTaskB2bWholesaleResponse200Schema,
        input,
        "postV1UploadTaskB2bWholesale",
      );
    case 208:
      return parseWbResponse(
        postV1UploadTaskB2bWholesaleResponse208Schema,
        input,
        "postV1UploadTaskB2bWholesale",
      );
    default:
      return unexpectedWbSuccessStatus("postV1UploadTaskB2bWholesale", status);
  }
}
