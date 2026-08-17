// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiMarketplaceV3OrdersMetaResponse } from "./types.js";

const postApiMarketplaceV3OrdersMetaResponse200Schema =
  createWbSchema<PostApiMarketplaceV3OrdersMetaResponse>(
    { kind: "ref", name: "v3.OrdersMetaAPI" },
    ordersFbsComponents,
  );

export function parsePostApiMarketplaceV3OrdersMetaResponse(
  status: number,
  input: unknown,
): PostApiMarketplaceV3OrdersMetaResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiMarketplaceV3OrdersMetaResponse200Schema,
        input,
        "POST /api/marketplace/v3/orders/meta",
      );
    default:
      return unexpectedWbSuccessStatus(
        "POST /api/marketplace/v3/orders/meta",
        status,
      );
  }
}
