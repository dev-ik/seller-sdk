// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse } from "./contract.js";
import type {
  GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedInput,
  GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse,
} from "./types.js";

export const GET_MARKETPLACE_V3_FBS_SETTINGS_AUTORETURNS_SUBCATEGORIES_RESTRICTED_OPERATION_ID =
  "getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted";

const definition: WbOperationDefinition<GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse> =
  {
    operationId:
      GET_MARKETPLACE_V3_FBS_SETTINGS_AUTORETURNS_SUBCATEGORIES_RESTRICTED_OPERATION_ID,
    method: "GET",
    path: "/api/marketplace/v3/fbs/settings/autoreturns/subcategories/restricted",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [
      { name: "next", location: "query", required: true, array: false },
      { name: "limit", location: "query", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse:
      parseGetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executeGetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted(
  execute: WbOperationExecutor,
  input: GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedInput,
  options: WbRequestOptions = {},
): Promise<GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse> {
  return execute(definition, input, options);
}
