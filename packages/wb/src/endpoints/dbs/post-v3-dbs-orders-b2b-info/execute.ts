// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersB2bInfoResponse } from "./contract.js";
import type {
  PostV3DbsOrdersB2bInfoInput,
  PostV3DbsOrdersB2bInfoResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_B2B_INFO_OPERATION_ID =
  "postV3DbsOrdersB2bInfo";

const definition: WbOperationDefinition<PostV3DbsOrdersB2bInfoResponse> = {
  operationId: POST_V3_DBS_ORDERS_B2B_INFO_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/b2b/info",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersB2bInfoResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersB2bInfo(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersB2bInfoInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersB2bInfoResponse> {
  return execute(definition, input, options);
}
