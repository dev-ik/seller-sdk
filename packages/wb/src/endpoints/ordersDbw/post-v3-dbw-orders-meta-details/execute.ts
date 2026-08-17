// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbwOrdersMetaDetailsResponse } from "./contract.js";
import type {
  PostV3DbwOrdersMetaDetailsInput,
  PostV3DbwOrdersMetaDetailsResponse,
} from "./types.js";

export const POST_V3_DBW_ORDERS_META_DETAILS_OPERATION_ID =
  "postV3DbwOrdersMetaDetails";

const definition: WbOperationDefinition<PostV3DbwOrdersMetaDetailsResponse> = {
  operationId: POST_V3_DBW_ORDERS_META_DETAILS_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbw/orders/meta/details",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbwOrdersMetaDetailsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbwOrdersMetaDetails(
  execute: WbOperationExecutor,
  input: PostV3DbwOrdersMetaDetailsInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbwOrdersMetaDetailsResponse> {
  return execute(definition, input, options);
}
