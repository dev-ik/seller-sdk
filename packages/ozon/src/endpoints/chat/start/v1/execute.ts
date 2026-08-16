import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { startChatV1ResponseSchema } from "./contract.js";
import type { StartChatV1Request, StartChatV1Response } from "./types.js";

export const START_CHAT_V1_OPERATION_ID = "ChatAPI_ChatStart";

export async function executeStartChatV1(
  transport: Transport,
  input: StartChatV1Request,
  options: OzonRequestOptions = {},
): Promise<StartChatV1Response> {
  const response = await transport.request({
    operationId: START_CHAT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/chat/start",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    startChatV1ResponseSchema,
    response.body,
    START_CHAT_V1_OPERATION_ID,
  );
}
