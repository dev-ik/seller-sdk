// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse } from "./contract.js";
import type {
  GetApiMarketplaceV3SuppliesSupplyIdOrderIdsInput,
  GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse,
} from "./types.js";

export const GET_API_MARKETPLACE_V3_SUPPLIES_SUPPLY_ID_ORDER_IDS_OPERATION_ID =
  "GET /api/marketplace/v3/supplies/{supplyId}/order-ids";

const definition: WbOperationDefinition<GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse> =
  {
    operationId:
      GET_API_MARKETPLACE_V3_SUPPLIES_SUPPLY_ID_ORDER_IDS_OPERATION_ID,
    method: "GET",
    path: "/api/marketplace/v3/supplies/{supplyId}/order-ids",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "supplyId", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executeGetApiMarketplaceV3SuppliesSupplyIdOrderIds(
  execute: WbOperationExecutor,
  input: GetApiMarketplaceV3SuppliesSupplyIdOrderIdsInput,
  options: WbRequestOptions = {},
): Promise<GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse> {
  return execute(definition, input, options);
}
