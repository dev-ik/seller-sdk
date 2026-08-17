// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV3OrdersStickersCrossBorderResponse } from "./contract.js";
import type {
  PostApiV3OrdersStickersCrossBorderInput,
  PostApiV3OrdersStickersCrossBorderResponse,
} from "./types.js";

export const POST_API_V3_ORDERS_STICKERS_CROSS_BORDER_OPERATION_ID =
  "POST /api/v3/orders/stickers/cross-border";

const definition: WbOperationDefinition<PostApiV3OrdersStickersCrossBorderResponse> =
  {
    operationId: POST_API_V3_ORDERS_STICKERS_CROSS_BORDER_OPERATION_ID,
    method: "POST",
    path: "/api/v3/orders/stickers/cross-border",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostApiV3OrdersStickersCrossBorderResponse,
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  };

export function executePostApiV3OrdersStickersCrossBorder(
  execute: WbOperationExecutor,
  input?: PostApiV3OrdersStickersCrossBorderInput,
  options: WbRequestOptions = {},
): Promise<PostApiV3OrdersStickersCrossBorderResponse> {
  return execute(definition, input ?? {}, options);
}
