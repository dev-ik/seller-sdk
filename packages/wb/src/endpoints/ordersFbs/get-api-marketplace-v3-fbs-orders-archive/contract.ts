// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiMarketplaceV3FbsOrdersArchiveResponse } from "./types.js";

const getApiMarketplaceV3FbsOrdersArchiveResponse200Schema =
  createWbSchema<GetApiMarketplaceV3FbsOrdersArchiveResponse>(
    { kind: "ref", name: "v3.ArchiveOrders" },
    ordersFbsComponents,
  );

export function parseGetApiMarketplaceV3FbsOrdersArchiveResponse(
  status: number,
  input: unknown,
): GetApiMarketplaceV3FbsOrdersArchiveResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiMarketplaceV3FbsOrdersArchiveResponse200Schema,
        input,
        "GET /api/marketplace/v3/fbs/orders/archive",
      );
    default:
      return unexpectedWbSuccessStatus(
        "GET /api/marketplace/v3/fbs/orders/archive",
        status,
      );
  }
}
