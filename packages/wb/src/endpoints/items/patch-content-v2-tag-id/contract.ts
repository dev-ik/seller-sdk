// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PatchContentV2TagIdResponse } from "./types.js";

const patchContentV2TagIdResponse200Schema =
  createWbSchema<PatchContentV2TagIdResponse>(
    { kind: "ref", name: "responseContentError" },
    itemsComponents,
  );

export function parsePatchContentV2TagIdResponse(
  status: number,
  input: unknown,
): PatchContentV2TagIdResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        patchContentV2TagIdResponse200Schema,
        input,
        "PATCH /content/v2/tag/{id}",
      );
    default:
      return unexpectedWbSuccessStatus("PATCH /content/v2/tag/{id}", status);
  }
}
