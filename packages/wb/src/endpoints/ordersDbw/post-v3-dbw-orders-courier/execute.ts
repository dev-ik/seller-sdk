// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbwOrdersCourierResponse } from "./contract.js";
import type {
  PostV3DbwOrdersCourierInput,
  PostV3DbwOrdersCourierResponse,
} from "./types.js";

export const POST_V3_DBW_ORDERS_COURIER_OPERATION_ID = "postV3DbwOrdersCourier";

const definition: WbOperationDefinition<PostV3DbwOrdersCourierResponse> = {
  operationId: POST_V3_DBW_ORDERS_COURIER_OPERATION_ID,
  method: "POST",
  path: "/api/v3/dbw/orders/courier",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbwOrdersCourierResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbwOrdersCourier(
  execute: WbOperationExecutor,
  input: PostV3DbwOrdersCourierInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbwOrdersCourierResponse> {
  return execute(definition, input, options);
}
