// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePatchMarketplaceV3FbsSettingsAutoreturnsResponse } from "./contract.js";
import type {
  PatchMarketplaceV3FbsSettingsAutoreturnsInput,
  PatchMarketplaceV3FbsSettingsAutoreturnsResponse,
} from "./types.js";

export const PATCH_MARKETPLACE_V3_FBS_SETTINGS_AUTORETURNS_OPERATION_ID =
  "patchMarketplaceV3FbsSettingsAutoreturns";

const definition: WbOperationDefinition<PatchMarketplaceV3FbsSettingsAutoreturnsResponse> =
  {
    operationId: PATCH_MARKETPLACE_V3_FBS_SETTINGS_AUTORETURNS_OPERATION_ID,
    method: "PATCH",
    path: "/api/marketplace/v3/fbs/settings/autoreturns",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePatchMarketplaceV3FbsSettingsAutoreturnsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePatchMarketplaceV3FbsSettingsAutoreturns(
  execute: WbOperationExecutor,
  input?: PatchMarketplaceV3FbsSettingsAutoreturnsInput,
  options: WbRequestOptions = {},
): Promise<PatchMarketplaceV3FbsSettingsAutoreturnsResponse> {
  return execute(definition, input ?? {}, options);
}
