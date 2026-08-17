// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3StocksWarehouseIdResponse } from "./types.js";

const postApiV3StocksWarehouseIdResponse200Schema =
  createWbSchema<PostApiV3StocksWarehouseIdResponse>(
    {
      kind: "object",
      properties: {
        stocks: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              chrtId: { kind: "number", integer: true },
              amount: { kind: "number", integer: true },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    itemsComponents,
  );

export function parsePostApiV3StocksWarehouseIdResponse(
  status: number,
  input: unknown,
): PostApiV3StocksWarehouseIdResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV3StocksWarehouseIdResponse200Schema,
        input,
        "POST /api/v3/stocks/{warehouseId}",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /api/v3/stocks/{warehouseId}",
        status,
      );
  }
}
