// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV2ListGoodsFilterResponse } from "./types.js";

const postApiV2ListGoodsFilterResponse200Schema =
  createWbSchema<PostApiV2ListGoodsFilterResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            listGoods: {
              kind: "array",
              items: { kind: "ref", name: "ItemsList" },
            },
          },
          required: ["listGoods"],
        },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
      },
      required: ["data", "error", "errorText"],
    },
    itemsComponents,
  );

export function parsePostApiV2ListGoodsFilterResponse(
  status: number,
  input: unknown,
): PostApiV2ListGoodsFilterResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV2ListGoodsFilterResponse200Schema,
        input,
        "POST /api/v2/list/goods/filter",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /api/v2/list/goods/filter",
        status,
      );
  }
}
