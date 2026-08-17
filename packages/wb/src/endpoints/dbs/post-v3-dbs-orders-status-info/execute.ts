// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersStatusInfoResponse } from "./contract.js";
import type {
  PostV3DbsOrdersStatusInfoInput,
  PostV3DbsOrdersStatusInfoResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_STATUS_INFO_OPERATION_ID =
  "postV3DbsOrdersStatusInfo";

const definition: WbOperationDefinition<PostV3DbsOrdersStatusInfoResponse> = {
  operationId: POST_V3_DBS_ORDERS_STATUS_INFO_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/status/info",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersStatusInfoResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersStatusInfo(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersStatusInfoInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersStatusInfoResponse> {
  return execute(definition, input, options);
}
