// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersStatusCancelResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersStatusCancelInput,
  PostV3ClickCollectOrdersStatusCancelResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_STATUS_CANCEL_OPERATION_ID =
  "postV3ClickCollectOrdersStatusCancel";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersStatusCancelResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_STATUS_CANCEL_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/cancel",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersStatusCancelResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersStatusCancel(
  execute: WbOperationExecutor,
  input?: PostV3ClickCollectOrdersStatusCancelInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersStatusCancelResponse> {
  return execute(definition, input ?? {}, options);
}
