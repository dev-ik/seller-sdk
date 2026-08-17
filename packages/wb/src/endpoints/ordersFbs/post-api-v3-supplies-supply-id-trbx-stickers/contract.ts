// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3SuppliesSupplyIdTrbxStickersResponse } from "./types.js";

const postApiV3SuppliesSupplyIdTrbxStickersResponse200Schema =
  createWbSchema<PostApiV3SuppliesSupplyIdTrbxStickersResponse>(
    {
      kind: "object",
      properties: {
        stickers: {
          kind: "array",
          items: { kind: "ref", name: "TrbxStickers" },
        },
      },
      required: [],
    },
    ordersFbsComponents,
  );

export function parsePostApiV3SuppliesSupplyIdTrbxStickersResponse(
  status: number,
  input: unknown,
): PostApiV3SuppliesSupplyIdTrbxStickersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV3SuppliesSupplyIdTrbxStickersResponse200Schema,
        input,
        "POST /api/v3/supplies/{supplyId}/trbx/stickers",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /api/v3/supplies/{supplyId}/trbx/stickers",
        status,
      );
  }
}
