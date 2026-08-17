// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersStatusReceiveResponse } from "./contract.js";
import type {
  PostV3DbsOrdersStatusReceiveInput,
  PostV3DbsOrdersStatusReceiveResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_STATUS_RECEIVE_OPERATION_ID =
  "postV3DbsOrdersStatusReceive";

const definition: WbOperationDefinition<PostV3DbsOrdersStatusReceiveResponse> =
  {
    operationId: POST_V3_DBS_ORDERS_STATUS_RECEIVE_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/status/receive",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3DbsOrdersStatusReceiveResponse,
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  };

export function executePostV3DbsOrdersStatusReceive(
  execute: WbOperationExecutor,
  input?: PostV3DbsOrdersStatusReceiveInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersStatusReceiveResponse> {
  return execute(definition, input ?? {}, options);
}
