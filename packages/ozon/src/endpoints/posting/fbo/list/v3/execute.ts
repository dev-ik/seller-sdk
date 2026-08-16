import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFboPostingsV3ResponseSchema } from "./contract.js";
import type {
  ListFboPostingsV3Request,
  ListFboPostingsV3Response,
} from "./types.js";
export const LIST_FBO_POSTINGS_V3_OPERATION_ID = "PostingFboList";
export async function executeListFboPostingsV3(
  transport: Transport,
  input: ListFboPostingsV3Request = {},
  options: OzonRequestOptions = {},
): Promise<ListFboPostingsV3Response> {
  const response = await transport.request({
    operationId: LIST_FBO_POSTINGS_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/posting/fbo/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFboPostingsV3ResponseSchema,
    response.body,
    LIST_FBO_POSTINGS_V3_OPERATION_ID,
  );
}
