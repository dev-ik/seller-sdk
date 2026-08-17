// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse } from "./types.js";

const getApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse200Schema =
  createWbSchema<GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse>(
    { kind: "ref", name: "v3.SupplyOrderIDsAPI" },
    ordersFbsComponents,
  );

export function parseGetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse(
  status: number,
  input: unknown,
): GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse200Schema,
        input,
        "GET /api/marketplace/v3/supplies/{supplyId}/order-ids",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /api/marketplace/v3/supplies/{supplyId}/order-ids",
        status,
      );
  }
}
