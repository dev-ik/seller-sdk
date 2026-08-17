// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1SellerMessageResponse } from "./contract.js";
import type {
  PostV1SellerMessageInput,
  PostV1SellerMessageResponse,
} from "./types.js";

export const POST_V1_SELLER_MESSAGE_OPERATION_ID = "postV1SellerMessage";

const definition: WbOperationDefinition<PostV1SellerMessageResponse> = {
  operationId: POST_V1_SELLER_MESSAGE_OPERATION_ID,
  method: "POST",
  path: "/api/v1/seller/message",
  productionOrigin: "https://buyer-chat-api.wildberries.ru",
  parameters: [],
  requestContentType: "multipart/form-data",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1SellerMessageResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executePostV1SellerMessage(
  execute: WbOperationExecutor,
  input: PostV1SellerMessageInput,
  options: WbRequestOptions = {},
): Promise<PostV1SellerMessageResponse> {
  return execute(definition, input, options);
}
