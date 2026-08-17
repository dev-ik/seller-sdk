// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersDeliveryDateResponse } from "./contract.js";
import type {
  PostV3DbsOrdersDeliveryDateInput,
  PostV3DbsOrdersDeliveryDateResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_DELIVERY_DATE_OPERATION_ID =
  "postV3DbsOrdersDeliveryDate";

const definition: WbOperationDefinition<PostV3DbsOrdersDeliveryDateResponse> = {
  operationId: POST_V3_DBS_ORDERS_DELIVERY_DATE_OPERATION_ID,
  method: "POST",
  path: "/api/v3/dbs/orders/delivery-date",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersDeliveryDateResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersDeliveryDate(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersDeliveryDateInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersDeliveryDateResponse> {
  return execute(definition, input, options);
}
