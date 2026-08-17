// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbwOrdersMetaSgtinResponse } from "./contract.js";
import type {
  PostV3DbwOrdersMetaSgtinInput,
  PostV3DbwOrdersMetaSgtinResponse,
} from "./types.js";

export const POST_V3_DBW_ORDERS_META_SGTIN_OPERATION_ID =
  "postV3DbwOrdersMetaSgtin";

const definition: WbOperationDefinition<PostV3DbwOrdersMetaSgtinResponse> = {
  operationId: POST_V3_DBW_ORDERS_META_SGTIN_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbw/orders/meta/sgtin",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbwOrdersMetaSgtinResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbwOrdersMetaSgtin(
  execute: WbOperationExecutor,
  input: PostV3DbwOrdersMetaSgtinInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbwOrdersMetaSgtinResponse> {
  return execute(definition, input, options);
}
