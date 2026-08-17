// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbwOrdersDeliveryDateResponse } from "./contract.js";
import type {
  PostV3DbwOrdersDeliveryDateInput,
  PostV3DbwOrdersDeliveryDateResponse,
} from "./types.js";

export const POST_V3_DBW_ORDERS_DELIVERY_DATE_OPERATION_ID =
  "postV3DbwOrdersDeliveryDate";

const definition: WbOperationDefinition<PostV3DbwOrdersDeliveryDateResponse> = {
  operationId: POST_V3_DBW_ORDERS_DELIVERY_DATE_OPERATION_ID,
  method: "POST",
  path: "/api/v3/dbw/orders/delivery-date",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbwOrdersDeliveryDateResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbwOrdersDeliveryDate(
  execute: WbOperationExecutor,
  input: PostV3DbwOrdersDeliveryDateInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbwOrdersDeliveryDateResponse> {
  return execute(definition, input, options);
}
