// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersMetaSgtinResponse } from "./contract.js";
import type {
  PostV3DbsOrdersMetaSgtinInput,
  PostV3DbsOrdersMetaSgtinResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_META_SGTIN_OPERATION_ID =
  "postV3DbsOrdersMetaSgtin";

const definition: WbOperationDefinition<PostV3DbsOrdersMetaSgtinResponse> = {
  operationId: POST_V3_DBS_ORDERS_META_SGTIN_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/meta/sgtin",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersMetaSgtinResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersMetaSgtin(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersMetaSgtinInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersMetaSgtinResponse> {
  return execute(definition, input, options);
}
