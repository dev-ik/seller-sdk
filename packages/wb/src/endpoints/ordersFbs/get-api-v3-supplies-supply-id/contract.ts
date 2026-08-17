// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV3SuppliesSupplyIdResponse } from "./types.js";

const getApiV3SuppliesSupplyIdResponse200Schema =
  createWbSchema<GetApiV3SuppliesSupplyIdResponse>(
    { kind: "ref", name: "Supply" },
    ordersFbsComponents,
  );

export function parseGetApiV3SuppliesSupplyIdResponse(
  status: number,
  input: unknown,
): GetApiV3SuppliesSupplyIdResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV3SuppliesSupplyIdResponse200Schema,
        input,
        "GET /api/v3/supplies/{supplyId}",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /api/v3/supplies/{supplyId}",
        status,
      );
  }
}
