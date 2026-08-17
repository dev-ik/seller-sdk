// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV2ListGoodsSizeNmResponse } from "./types.js";

const getApiV2ListGoodsSizeNmResponse200Schema =
  createWbSchema<GetApiV2ListGoodsSizeNmResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            listGoods: {
              kind: "array",
              items: { kind: "ref", name: "SizeGood" },
              nullable: true,
            },
          },
          required: [],
        },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
      },
      required: [],
    },
    itemsComponents,
  );

export function parseGetApiV2ListGoodsSizeNmResponse(
  status: number,
  input: unknown,
): GetApiV2ListGoodsSizeNmResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV2ListGoodsSizeNmResponse200Schema,
        input,
        "GET /api/v2/list/goods/size/nm",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /api/v2/list/goods/size/nm",
        status,
      );
  }
}
