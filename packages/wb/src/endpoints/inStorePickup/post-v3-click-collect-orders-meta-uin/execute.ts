// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersMetaUinResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersMetaUinInput,
  PostV3ClickCollectOrdersMetaUinResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_META_UIN_OPERATION_ID =
  "postV3ClickCollectOrdersMetaUin";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersMetaUinResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_META_UIN_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/uin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersMetaUinResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersMetaUin(
  execute: WbOperationExecutor,
  input: PostV3ClickCollectOrdersMetaUinInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersMetaUinResponse> {
  return execute(definition, input, options);
}
