// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetMarketplaceV3FbsSettingsAutoreturnsResponse } from "./contract.js";
import type { GetMarketplaceV3FbsSettingsAutoreturnsResponse } from "./types.js";

export const GET_MARKETPLACE_V3_FBS_SETTINGS_AUTORETURNS_OPERATION_ID =
  "getMarketplaceV3FbsSettingsAutoreturns";

const definition: WbOperationDefinition<GetMarketplaceV3FbsSettingsAutoreturnsResponse> =
  {
    operationId: GET_MARKETPLACE_V3_FBS_SETTINGS_AUTORETURNS_OPERATION_ID,
    method: "GET",
    path: "/api/marketplace/v3/fbs/settings/autoreturns",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetMarketplaceV3FbsSettingsAutoreturnsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executeGetMarketplaceV3FbsSettingsAutoreturns(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetMarketplaceV3FbsSettingsAutoreturnsResponse> {
  return execute(definition, undefined, options);
}
