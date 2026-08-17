// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbwOrdersMetaDeleteResponse } from "./contract.js";
import type {
  PostV3DbwOrdersMetaDeleteInput,
  PostV3DbwOrdersMetaDeleteResponse,
} from "./types.js";

export const POST_V3_DBW_ORDERS_META_DELETE_OPERATION_ID =
  "postV3DbwOrdersMetaDelete";

const definition: WbOperationDefinition<PostV3DbwOrdersMetaDeleteResponse> = {
  operationId: POST_V3_DBW_ORDERS_META_DELETE_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbw/orders/meta/delete",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbwOrdersMetaDeleteResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbwOrdersMetaDelete(
  execute: WbOperationExecutor,
  input: PostV3DbwOrdersMetaDeleteInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbwOrdersMetaDeleteResponse> {
  return execute(definition, input, options);
}
