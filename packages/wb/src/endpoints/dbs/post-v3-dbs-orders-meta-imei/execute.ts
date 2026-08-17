// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersMetaImeiResponse } from "./contract.js";
import type {
  PostV3DbsOrdersMetaImeiInput,
  PostV3DbsOrdersMetaImeiResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_META_IMEI_OPERATION_ID =
  "postV3DbsOrdersMetaImei";

const definition: WbOperationDefinition<PostV3DbsOrdersMetaImeiResponse> = {
  operationId: POST_V3_DBS_ORDERS_META_IMEI_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/meta/imei",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersMetaImeiResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersMetaImei(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersMetaImeiInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersMetaImeiResponse> {
  return execute(definition, input, options);
}
