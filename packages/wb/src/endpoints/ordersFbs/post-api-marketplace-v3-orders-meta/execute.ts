// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiMarketplaceV3OrdersMetaResponse } from "./contract.js";
import type {
  PostApiMarketplaceV3OrdersMetaInput,
  PostApiMarketplaceV3OrdersMetaResponse,
} from "./types.js";

export const POST_API_MARKETPLACE_V3_ORDERS_META_OPERATION_ID =
  "POST /api/marketplace/v3/orders/meta";

const definition: WbOperationDefinition<PostApiMarketplaceV3OrdersMetaResponse> =
  {
    operationId: POST_API_MARKETPLACE_V3_ORDERS_META_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/orders/meta",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostApiMarketplaceV3OrdersMetaResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePostApiMarketplaceV3OrdersMeta(
  execute: WbOperationExecutor,
  input: PostApiMarketplaceV3OrdersMetaInput,
  options: WbRequestOptions = {},
): Promise<PostApiMarketplaceV3OrdersMetaResponse> {
  return execute(definition, input, options);
}
