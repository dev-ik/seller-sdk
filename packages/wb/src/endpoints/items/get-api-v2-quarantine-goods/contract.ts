// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV2QuarantineGoodsResponse } from "./types.js";

const getApiV2QuarantineGoodsResponse200Schema =
  createWbSchema<GetApiV2QuarantineGoodsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            quarantineGoods: {
              kind: "array",
              items: { kind: "ref", name: "QuarantineItems" },
            },
          },
          required: [],
          nullable: true,
        },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
      },
      required: [],
    },
    itemsComponents,
  );

export function parseGetApiV2QuarantineGoodsResponse(
  status: number,
  input: unknown,
): GetApiV2QuarantineGoodsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV2QuarantineGoodsResponse200Schema,
        input,
        "GET /api/v2/quarantine/goods",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v2/quarantine/goods", status);
  }
}
