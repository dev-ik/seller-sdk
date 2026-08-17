// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2BarcodesResponse } from "./types.js";

const postContentV2BarcodesResponse200Schema =
  createWbSchema<PostContentV2BarcodesResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "array", items: { kind: "string" } },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
        additionalErrors: { kind: "string", nullable: true },
      },
      required: [],
    },
    itemsComponents,
  );

export function parsePostContentV2BarcodesResponse(
  status: number,
  input: unknown,
): PostContentV2BarcodesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2BarcodesResponse200Schema,
        input,
        "POST /content/v2/barcodes",
      );
    default:
      return unexpectedWbSuccessStatus("POST /content/v2/barcodes", status);
  }
}
