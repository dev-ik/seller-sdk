// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersMetaGtinResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersMetaGtinInput,
  PostV3ClickCollectOrdersMetaGtinResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_META_GTIN_OPERATION_ID =
  "postV3ClickCollectOrdersMetaGtin";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersMetaGtinResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_META_GTIN_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/gtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersMetaGtinResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersMetaGtin(
  execute: WbOperationExecutor,
  input: PostV3ClickCollectOrdersMetaGtinInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersMetaGtinResponse> {
  return execute(definition, input, options);
}
