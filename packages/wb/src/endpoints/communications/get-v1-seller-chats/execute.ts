// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SellerChatsResponse } from "./contract.js";
import type { GetV1SellerChatsResponse } from "./types.js";

export const GET_V1_SELLER_CHATS_OPERATION_ID = "getV1SellerChats";

const definition: WbOperationDefinition<GetV1SellerChatsResponse> = {
  operationId: GET_V1_SELLER_CHATS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/seller/chats",
  productionOrigin: "https://buyer-chat-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1SellerChatsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1SellerChats(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1SellerChatsResponse> {
  return execute(definition, undefined, options);
}
