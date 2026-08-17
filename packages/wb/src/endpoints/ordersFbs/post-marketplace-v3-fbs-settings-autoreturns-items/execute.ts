// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostMarketplaceV3FbsSettingsAutoreturnsItemsResponse } from "./contract.js";
import type {
  PostMarketplaceV3FbsSettingsAutoreturnsItemsInput,
  PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse,
} from "./types.js";

export const POST_MARKETPLACE_V3_FBS_SETTINGS_AUTORETURNS_ITEMS_OPERATION_ID =
  "postMarketplaceV3FbsSettingsAutoreturnsItems";

const definition: WbOperationDefinition<PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse> =
  {
    operationId:
      POST_MARKETPLACE_V3_FBS_SETTINGS_AUTORETURNS_ITEMS_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/fbs/settings/autoreturns/items",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostMarketplaceV3FbsSettingsAutoreturnsItemsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePostMarketplaceV3FbsSettingsAutoreturnsItems(
  execute: WbOperationExecutor,
  input?: PostMarketplaceV3FbsSettingsAutoreturnsItemsInput,
  options: WbRequestOptions = {},
): Promise<PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse> {
  return execute(definition, input ?? {}, options);
}
