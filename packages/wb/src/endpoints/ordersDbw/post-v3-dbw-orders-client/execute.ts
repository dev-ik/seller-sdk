// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbwOrdersClientResponse } from "./contract.js";
import type {
  PostV3DbwOrdersClientInput,
  PostV3DbwOrdersClientResponse,
} from "./types.js";

export const POST_V3_DBW_ORDERS_CLIENT_OPERATION_ID = "postV3DbwOrdersClient";

const definition: WbOperationDefinition<PostV3DbwOrdersClientResponse> = {
  operationId: POST_V3_DBW_ORDERS_CLIENT_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbw/orders/client",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbwOrdersClientResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbwOrdersClient(
  execute: WbOperationExecutor,
  input: PostV3DbwOrdersClientInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbwOrdersClientResponse> {
  return execute(definition, input, options);
}
