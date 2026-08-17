// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersMetaUinResponse } from "./contract.js";
import type {
  PostV3DbsOrdersMetaUinInput,
  PostV3DbsOrdersMetaUinResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_META_UIN_OPERATION_ID =
  "postV3DbsOrdersMetaUin";

const definition: WbOperationDefinition<PostV3DbsOrdersMetaUinResponse> = {
  operationId: POST_V3_DBS_ORDERS_META_UIN_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/meta/uin",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersMetaUinResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersMetaUin(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersMetaUinInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersMetaUinResponse> {
  return execute(definition, input, options);
}
