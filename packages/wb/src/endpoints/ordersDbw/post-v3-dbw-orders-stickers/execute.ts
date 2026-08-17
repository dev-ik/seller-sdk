// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbwOrdersStickersResponse } from "./contract.js";
import type {
  PostV3DbwOrdersStickersInput,
  PostV3DbwOrdersStickersResponse,
} from "./types.js";

export const POST_V3_DBW_ORDERS_STICKERS_OPERATION_ID =
  "postV3DbwOrdersStickers";

const definition: WbOperationDefinition<PostV3DbwOrdersStickersResponse> = {
  operationId: POST_V3_DBW_ORDERS_STICKERS_OPERATION_ID,
  method: "POST",
  path: "/api/v3/dbw/orders/stickers",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  parameters: [
    { name: "type", location: "query", required: true, array: false },
    { name: "width", location: "query", required: true, array: false },
    { name: "height", location: "query", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV3DbwOrdersStickersResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbwOrdersStickers(
  execute: WbOperationExecutor,
  input: PostV3DbwOrdersStickersInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbwOrdersStickersResponse> {
  return execute(definition, input, options);
}
