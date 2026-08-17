// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersMetaGtinResponse } from "./contract.js";
import type {
  PostV3DbsOrdersMetaGtinInput,
  PostV3DbsOrdersMetaGtinResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_META_GTIN_OPERATION_ID =
  "postV3DbsOrdersMetaGtin";

const definition: WbOperationDefinition<PostV3DbsOrdersMetaGtinResponse> = {
  operationId: POST_V3_DBS_ORDERS_META_GTIN_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/meta/gtin",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersMetaGtinResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersMetaGtin(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersMetaGtinInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersMetaGtinResponse> {
  return execute(definition, input, options);
}
