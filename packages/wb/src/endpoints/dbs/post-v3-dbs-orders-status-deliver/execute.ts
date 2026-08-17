// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersStatusDeliverResponse } from "./contract.js";
import type {
  PostV3DbsOrdersStatusDeliverInput,
  PostV3DbsOrdersStatusDeliverResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_STATUS_DELIVER_OPERATION_ID =
  "postV3DbsOrdersStatusDeliver";

const definition: WbOperationDefinition<PostV3DbsOrdersStatusDeliverResponse> =
  {
    operationId: POST_V3_DBS_ORDERS_STATUS_DELIVER_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/status/deliver",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3DbsOrdersStatusDeliverResponse,
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  };

export function executePostV3DbsOrdersStatusDeliver(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersStatusDeliverInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersStatusDeliverResponse> {
  return execute(definition, input, options);
}
