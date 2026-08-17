// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV3OrdersStickersResponse } from "./contract.js";
import type {
  PostApiV3OrdersStickersInput,
  PostApiV3OrdersStickersResponse,
} from "./types.js";

export const POST_API_V3_ORDERS_STICKERS_OPERATION_ID =
  "POST /api/v3/orders/stickers";

const definition: WbOperationDefinition<PostApiV3OrdersStickersResponse> = {
  operationId: POST_API_V3_ORDERS_STICKERS_OPERATION_ID,
  method: "POST",
  path: "/api/v3/orders/stickers",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "type", location: "query", required: true, array: false },
    { name: "width", location: "query", required: true, array: false },
    { name: "height", location: "query", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostApiV3OrdersStickersResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executePostApiV3OrdersStickers(
  execute: WbOperationExecutor,
  input: PostApiV3OrdersStickersInput,
  options: WbRequestOptions = {},
): Promise<PostApiV3OrdersStickersResponse> {
  return execute(definition, input, options);
}
