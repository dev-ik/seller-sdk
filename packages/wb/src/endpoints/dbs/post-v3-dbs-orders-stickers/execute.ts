// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersStickersResponse } from "./contract.js";
import type {
  PostV3DbsOrdersStickersInput,
  PostV3DbsOrdersStickersResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_STICKERS_OPERATION_ID =
  "postV3DbsOrdersStickers";

const definition: WbOperationDefinition<PostV3DbsOrdersStickersResponse> = {
  operationId: POST_V3_DBS_ORDERS_STICKERS_OPERATION_ID,
  method: "POST",
  path: "/api/marketplace/v3/dbs/orders/stickers",
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
  parseResponse: parsePostV3DbsOrdersStickersResponse,
  source: "https://dev.wildberries.ru/docs/openapi/dbs",
  verifiedAt: "2026-08-17",
};

export function executePostV3DbsOrdersStickers(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersStickersInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersStickersResponse> {
  return execute(definition, input, options);
}
