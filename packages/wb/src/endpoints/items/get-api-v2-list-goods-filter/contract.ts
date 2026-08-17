// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV2ListGoodsFilterResponse } from "./types.js";

const getApiV2ListGoodsFilterResponse200Schema =
  createWbSchema<GetApiV2ListGoodsFilterResponse>(
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

export function parseGetApiV2ListGoodsFilterResponse(
  status: number,
  input: unknown,
): GetApiV2ListGoodsFilterResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV2ListGoodsFilterResponse200Schema,
        input,
        "GET /api/v2/list/goods/filter",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v2/list/goods/filter", status);
  }
}
