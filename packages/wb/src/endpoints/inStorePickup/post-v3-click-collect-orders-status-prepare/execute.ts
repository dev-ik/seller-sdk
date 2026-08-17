// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersStatusPrepareResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersStatusPrepareInput,
  PostV3ClickCollectOrdersStatusPrepareResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_STATUS_PREPARE_OPERATION_ID =
  "postV3ClickCollectOrdersStatusPrepare";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersStatusPrepareResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_STATUS_PREPARE_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/prepare",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersStatusPrepareResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersStatusPrepare(
  execute: WbOperationExecutor,
  input?: PostV3ClickCollectOrdersStatusPrepareInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersStatusPrepareResponse> {
  return execute(definition, input ?? {}, options);
}
