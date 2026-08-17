// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersClientResponse } from "./contract.js";
import type {
  PostV3DbsOrdersClientInput,
  PostV3DbsOrdersClientResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_CLIENT_OPERATION_ID = "postV3DbsOrdersClient";

const definition: WbOperationDefinition<PostV3DbsOrdersClientResponse> = {
  operationId: POST_V3_DBS_ORDERS_CLIENT_OPERATION_ID,
  method: "POST",
  path: "/api/v3/dbs/orders/client",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersClientResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersClient(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersClientInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersClientResponse> {
  return execute(definition, input, options);
}
