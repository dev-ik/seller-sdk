// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersFinalPriceResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersFinalPriceInput,
  PostV3ClickCollectOrdersFinalPriceResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_FINAL_PRICE_OPERATION_ID =
  "postV3ClickCollectOrdersFinalPrice";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersFinalPriceResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_FINAL_PRICE_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/final-price",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersFinalPriceResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersFinalPrice(
  execute: WbOperationExecutor,
  input?: PostV3ClickCollectOrdersFinalPriceInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersFinalPriceResponse> {
  return execute(definition, input ?? {}, options);
}
