// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersStatusRejectResponse } from "./contract.js";
import type {
  PostV3DbsOrdersStatusRejectInput,
  PostV3DbsOrdersStatusRejectResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_STATUS_REJECT_OPERATION_ID =
  "postV3DbsOrdersStatusReject";

const definition: WbOperationDefinition<PostV3DbsOrdersStatusRejectResponse> = {
  operationId: POST_V3_DBS_ORDERS_STATUS_REJECT_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/status/reject",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersStatusRejectResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersStatusReject(
  execute: WbOperationExecutor,
  input?: PostV3DbsOrdersStatusRejectInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersStatusRejectResponse> {
  return execute(definition, input ?? {}, options);
}
