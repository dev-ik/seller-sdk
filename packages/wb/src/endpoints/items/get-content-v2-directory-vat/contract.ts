// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetContentV2DirectoryVatResponse } from "./types.js";

const getContentV2DirectoryVatResponse200Schema =
  createWbSchema<GetContentV2DirectoryVatResponse>(
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

export function parseGetContentV2DirectoryVatResponse(
  status: number,
  input: unknown,
): GetContentV2DirectoryVatResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getContentV2DirectoryVatResponse200Schema,
        input,
        "GET /content/v2/directory/vat",
      );
    default:
      return unexpectedWbSuccessStatus("GET /content/v2/directory/vat", status);
  }
}
