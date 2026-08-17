// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostContentV2CardsMoveNmResponse } from "./types.js";

const postContentV2CardsMoveNmResponse200Schema =
  createWbSchema<PostContentV2CardsMoveNmResponse>(
    { kind: "ref", name: "responseItemList" },
    itemsComponents,
  );

export function parsePostContentV2CardsMoveNmResponse(
  status: number,
  input: unknown,
): PostContentV2CardsMoveNmResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postContentV2CardsMoveNmResponse200Schema,
        input,
        "POST /content/v2/cards/moveNm",
      );
    default:
      return unexpectedWbSuccessStatus("POST /content/v2/cards/moveNm", status);
  }
}
