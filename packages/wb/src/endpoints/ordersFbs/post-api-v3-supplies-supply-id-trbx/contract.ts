// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3SuppliesSupplyIdTrbxResponse } from "./types.js";

const postApiV3SuppliesSupplyIdTrbxResponse201Schema =
  createWbSchema<PostApiV3SuppliesSupplyIdTrbxResponse>(
    {
      kind: "object",
      properties: { trbxIds: { kind: "array", items: { kind: "string" } } },
      required: [],
    },
    ordersFbsComponents,
  );

export function parsePostApiV3SuppliesSupplyIdTrbxResponse(
  status: number,
  input: unknown,
): PostApiV3SuppliesSupplyIdTrbxResponse {
  switch (status) {
    case 201:
      return parseWbResponse(
        postApiV3SuppliesSupplyIdTrbxResponse201Schema,
        input,
        "POST /api/v3/supplies/{supplyId}/trbx",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /api/v3/supplies/{supplyId}/trbx",
        status,
      );
  }
}
