// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV2BufferGoodsTaskResponse } from "./types.js";

const getApiV2BufferGoodsTaskResponse200Schema =
  createWbSchema<GetApiV2BufferGoodsTaskResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            uploadID: { kind: "number", integer: true, nullable: true },
            bufferGoods: {
              kind: "array",
              items: { kind: "ref", name: "GoodBufferHistory" },
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

export function parseGetApiV2BufferGoodsTaskResponse(
  status: number,
  input: unknown,
): GetApiV2BufferGoodsTaskResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV2BufferGoodsTaskResponse200Schema,
        input,
        "GET /api/v2/buffer/goods/task",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v2/buffer/goods/task", status);
  }
}
