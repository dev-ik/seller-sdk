// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersStatusConfirmResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersStatusConfirmInput,
  PostV3ClickCollectOrdersStatusConfirmResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_STATUS_CONFIRM_OPERATION_ID =
  "postV3ClickCollectOrdersStatusConfirm";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersStatusConfirmResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_STATUS_CONFIRM_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/confirm",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersStatusConfirmResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersStatusConfirm(
  execute: WbOperationExecutor,
  input?: PostV3ClickCollectOrdersStatusConfirmInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersStatusConfirmResponse> {
  return execute(definition, input ?? {}, options);
}
