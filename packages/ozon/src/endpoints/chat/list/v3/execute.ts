import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listChatsV3ResponseSchema } from "./contract.js";
import type { ListChatsV3Request, ListChatsV3Response } from "./types.js";
export const LIST_CHATS_V3_OPERATION_ID = "ChatAPI_ChatListV3";
export async function executeListChatsV3(
  transport: Transport,
  input: ListChatsV3Request,
  options: OzonRequestOptions = {},
): Promise<ListChatsV3Response> {
  const response = await transport.request({
    operationId: LIST_CHATS_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/chat/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listChatsV3ResponseSchema,
    response.body,
    LIST_CHATS_V3_OPERATION_ID,
  );
}
