// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersMetaSgtinResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersMetaSgtinInput,
  PostV3ClickCollectOrdersMetaSgtinResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_META_SGTIN_OPERATION_ID =
  "postV3ClickCollectOrdersMetaSgtin";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersMetaSgtinResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_META_SGTIN_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/sgtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersMetaSgtinResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersMetaSgtin(
  execute: WbOperationExecutor,
  input: PostV3ClickCollectOrdersMetaSgtinInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersMetaSgtinResponse> {
  return execute(definition, input, options);
}
