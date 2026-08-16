import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { readChatV2ResponseSchema } from "./contract.js";
import type { ReadChatV2Request, ReadChatV2Response } from "./types.js";

export const READ_CHAT_V2_OPERATION_ID = "ChatAPI_ChatReadV2";

export async function executeReadChatV2(
  transport: Transport,
  input: ReadChatV2Request,
  options: OzonRequestOptions = {},
): Promise<ReadChatV2Response> {
  const response = await transport.request({
    operationId: READ_CHAT_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/chat/read",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    readChatV2ResponseSchema,
    response.body,
    READ_CHAT_V2_OPERATION_ID,
  );
}
