// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3SuppliesSupplyIdTrbxResponse } from "./types.js";

const getApiV3SuppliesSupplyIdTrbxResponse200Schema =
  createWbSchema<GetApiV3SuppliesSupplyIdTrbxResponse>(
    {
      kind: "object",
      properties: {
        trbxes: { kind: "array", items: { kind: "ref", name: "SupplyTrbx" } },
      },
      required: [],
    },
    ordersFbsComponents,
  );

export function parseGetApiV3SuppliesSupplyIdTrbxResponse(
  status: number,
  input: unknown,
): GetApiV3SuppliesSupplyIdTrbxResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3SuppliesSupplyIdTrbxResponse200Schema,
        input,
        "GET /api/v3/supplies/{supplyId}/trbx",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /api/v3/supplies/{supplyId}/trbx",
        status,
      );
  }
}
