// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersClientResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersClientInput,
  PostV3ClickCollectOrdersClientResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_CLIENT_OPERATION_ID =
  "postV3ClickCollectOrdersClient";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersClientResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_CLIENT_OPERATION_ID,
    method: "POST",
    path: "/api/v3/click-collect/orders/client",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersClientResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersClient(
  execute: WbOperationExecutor,
  input: PostV3ClickCollectOrdersClientInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersClientResponse> {
  return execute(definition, input, options);
}
