// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersFinalPriceResponse } from "./contract.js";
import type {
  PostV3DbsOrdersFinalPriceInput,
  PostV3DbsOrdersFinalPriceResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_FINAL_PRICE_OPERATION_ID =
  "postV3DbsOrdersFinalPrice";

const definition: WbOperationDefinition<PostV3DbsOrdersFinalPriceResponse> = {
  operationId: POST_V3_DBS_ORDERS_FINAL_PRICE_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/final-price",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbsOrdersFinalPriceResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersFinalPrice(
  execute: WbOperationExecutor,
  input?: PostV3DbsOrdersFinalPriceInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersFinalPriceResponse> {
  return execute(definition, input ?? {}, options);
}
