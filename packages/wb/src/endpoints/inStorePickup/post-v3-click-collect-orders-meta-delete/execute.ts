// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersMetaDeleteResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersMetaDeleteInput,
  PostV3ClickCollectOrdersMetaDeleteResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_META_DELETE_OPERATION_ID =
  "postV3ClickCollectOrdersMetaDelete";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersMetaDeleteResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_META_DELETE_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/delete",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersMetaDeleteResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersMetaDelete(
  execute: WbOperationExecutor,
  input: PostV3ClickCollectOrdersMetaDeleteInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersMetaDeleteResponse> {
  return execute(definition, input, options);
}
