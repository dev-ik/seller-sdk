// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersMetaDetailsResponse } from "./contract.js";
import type {
  PostV3DbsOrdersMetaDetailsInput,
  PostV3DbsOrdersMetaDetailsResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_META_DETAILS_OPERATION_ID =
  "postV3DbsOrdersMetaDetails";

const definition: WbOperationDefinition<PostV3DbsOrdersMetaDetailsResponse> = {
  operationId: POST_V3_DBS_ORDERS_META_DETAILS_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/meta/details",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersMetaDetailsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersMetaDetails(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersMetaDetailsInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersMetaDetailsResponse> {
  return execute(definition, input, options);
}
