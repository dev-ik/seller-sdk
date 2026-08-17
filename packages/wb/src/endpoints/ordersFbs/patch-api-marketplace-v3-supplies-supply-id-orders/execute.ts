// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse } from "./contract.js";
import type {
  PatchApiMarketplaceV3SuppliesSupplyIdOrdersInput,
  PatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse,
} from "./types.js";

export const PATCH_API_MARKETPLACE_V3_SUPPLIES_SUPPLY_ID_ORDERS_OPERATION_ID =
  "PATCH /api/marketplace/v3/supplies/{supplyId}/orders";

const definition: WbOperationDefinition<PatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse> =
  {
    operationId:
      PATCH_API_MARKETPLACE_V3_SUPPLIES_SUPPLY_ID_ORDERS_OPERATION_ID,
    method: "PATCH",
    path: "/api/marketplace/v3/supplies/{supplyId}/orders",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "supplyId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePatchApiMarketplaceV3SuppliesSupplyIdOrders(
  execute: WbOperationExecutor,
  input: PatchApiMarketplaceV3SuppliesSupplyIdOrdersInput,
  options: WbRequestOptions = {},
): Promise<PatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse> {
  return execute(definition, input, options);
}
