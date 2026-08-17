// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { DeleteContentV2TagIdResponse } from "./types.js";

const deleteContentV2TagIdResponse200Schema =
  createWbSchema<DeleteContentV2TagIdResponse>(
    { kind: "ref", name: "responseContentError" },
    itemsComponents,
  );

export function parseDeleteContentV2TagIdResponse(
  status: number,
  input: unknown,
): DeleteContentV2TagIdResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        deleteContentV2TagIdResponse200Schema,
        input,
        "DELETE /content/v2/tag/{id}",
      );
    default:
      return unexpectedWbSuccessStatus("DELETE /content/v2/tag/{id}", status);
  }
}
