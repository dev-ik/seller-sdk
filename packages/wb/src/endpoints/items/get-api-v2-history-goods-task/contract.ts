// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV2HistoryGoodsTaskResponse } from "./types.js";

const getApiV2HistoryGoodsTaskResponse200Schema =
  createWbSchema<GetApiV2HistoryGoodsTaskResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            uploadID: { kind: "number", integer: true, nullable: true },
            historyGoods: {
              kind: "array",
              items: { kind: "ref", name: "GoodHistory" },
              nullable: true,
            },
          },
          required: [],
        },
      },
      required: [],
    },
    itemsComponents,
  );

export function parseGetApiV2HistoryGoodsTaskResponse(
  status: number,
  input: unknown,
): GetApiV2HistoryGoodsTaskResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV2HistoryGoodsTaskResponse200Schema,
        input,
        "GET /api/v2/history/goods/task",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /api/v2/history/goods/task",
        status,
      );
  }
}
