import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFbpPostingsV1ResponseSchema } from "./contract.js";
import type {
  ListFbpPostingsV1Request,
  ListFbpPostingsV1Response,
} from "./types.js";

export const LIST_FBP_POSTINGS_V1_OPERATION_ID = "PostingFbpList";

export async function executeListFbpPostingsV1(
  transport: Transport,
  input: ListFbpPostingsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFbpPostingsV1Response> {
  const response = await transport.request({
    operationId: LIST_FBP_POSTINGS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbp/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbpPostingsV1ResponseSchema,
    response.body,
    LIST_FBP_POSTINGS_V1_OPERATION_ID,
  );
}
