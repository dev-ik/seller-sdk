// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersStatusReceiveResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersStatusReceiveInput,
  PostV3ClickCollectOrdersStatusReceiveResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_STATUS_RECEIVE_OPERATION_ID =
  "postV3ClickCollectOrdersStatusReceive";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersStatusReceiveResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_STATUS_RECEIVE_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/receive",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersStatusReceiveResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersStatusReceive(
  execute: WbOperationExecutor,
  input?: PostV3ClickCollectOrdersStatusReceiveInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersStatusReceiveResponse> {
  return execute(definition, input ?? {}, options);
}
