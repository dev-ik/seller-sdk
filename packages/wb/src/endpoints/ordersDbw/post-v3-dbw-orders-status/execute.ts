// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbwOrdersStatusResponse } from "./contract.js";
import type {
  PostV3DbwOrdersStatusInput,
  PostV3DbwOrdersStatusResponse,
} from "./types.js";

export const POST_V3_DBW_ORDERS_STATUS_OPERATION_ID = "postV3DbwOrdersStatus";

const definition: WbOperationDefinition<PostV3DbwOrdersStatusResponse> = {
  operationId: POST_V3_DBW_ORDERS_STATUS_OPERATION_ID,
  method: "POST",
  path: "/api/v3/dbw/orders/status",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbwOrdersStatusResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbwOrdersStatus(
  execute: WbOperationExecutor,
  input?: PostV3DbwOrdersStatusInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbwOrdersStatusResponse> {
  return execute(definition, input ?? {}, options);
}
