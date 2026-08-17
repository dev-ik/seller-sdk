// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse } from "./contract.js";
import type {
  PatchMarketplaceV3FbsSettingsAutoreturnsItemsInput,
  PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse,
} from "./types.js";

export const PATCH_MARKETPLACE_V3_FBS_SETTINGS_AUTORETURNS_ITEMS_OPERATION_ID =
  "patchMarketplaceV3FbsSettingsAutoreturnsItems";

const definition: WbOperationDefinition<PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse> =
  {
    operationId:
      PATCH_MARKETPLACE_V3_FBS_SETTINGS_AUTORETURNS_ITEMS_OPERATION_ID,
    method: "PATCH",
    path: "/api/marketplace/v3/fbs/settings/autoreturns/items",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePatchMarketplaceV3FbsSettingsAutoreturnsItems(
  execute: WbOperationExecutor,
  input?: PatchMarketplaceV3FbsSettingsAutoreturnsItemsInput,
  options: WbRequestOptions = {},
): Promise<PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse> {
  return execute(definition, input ?? {}, options);
}
