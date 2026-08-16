import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFboPostingsV2ResponseSchema } from "./contract.js";
import type {
  ListFboPostingsV2Request,
  ListFboPostingsV2Response,
} from "./types.js";
export const LIST_FBO_POSTINGS_V2_OPERATION_ID = "PostingAPI_GetFboPostingList";
export async function executeListFboPostingsV2(
  transport: Transport,
  input: ListFboPostingsV2Request,
  options: OzonRequestOptions = {},
): Promise<ListFboPostingsV2Response> {
  const response = await transport.request({
    operationId: LIST_FBO_POSTINGS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbo/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFboPostingsV2ResponseSchema,
    response.body,
    LIST_FBO_POSTINGS_V2_OPERATION_ID,
  );
}
