// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2TagNomenclatureLinkResponse } from "./types.js";

const postContentV2TagNomenclatureLinkResponse200Schema =
  createWbSchema<PostContentV2TagNomenclatureLinkResponse>(
    { kind: "ref", name: "responseContentError" },
    itemsComponents,
  );

export function parsePostContentV2TagNomenclatureLinkResponse(
  status: number,
  input: unknown,
): PostContentV2TagNomenclatureLinkResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2TagNomenclatureLinkResponse200Schema,
        input,
        "POST /content/v2/tag/nomenclature/link",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /content/v2/tag/nomenclature/link",
        status,
      );
  }
}
