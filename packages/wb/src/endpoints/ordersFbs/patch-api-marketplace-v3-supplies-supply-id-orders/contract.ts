// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse } from "./types.js";

export function parsePatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse(
  status: number,
  input: unknown,
): PatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus(
        "PATCH /api/marketplace/v3/supplies/{supplyId}/orders",
        status,
      );
  }
}
