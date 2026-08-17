// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbwOrdersStatusDeliverResponse } from "./contract.js";
import type {
  PostV3DbwOrdersStatusDeliverInput,
  PostV3DbwOrdersStatusDeliverResponse,
} from "./types.js";

export const POST_V3_DBW_ORDERS_STATUS_DELIVER_OPERATION_ID =
  "postV3DbwOrdersStatusDeliver";

const definition: WbOperationDefinition<PostV3DbwOrdersStatusDeliverResponse> =
  {
    operationId: POST_V3_DBW_ORDERS_STATUS_DELIVER_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/dbw/orders/status/deliver",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3DbwOrdersStatusDeliverResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  };

export function executePostV3DbwOrdersStatusDeliver(
  execute: WbOperationExecutor,
  input: PostV3DbwOrdersStatusDeliverInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbwOrdersStatusDeliverResponse> {
  return execute(definition, input, options);
}
