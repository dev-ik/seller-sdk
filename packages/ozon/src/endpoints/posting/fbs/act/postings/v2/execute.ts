import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listFbsActPostingsResponseSchema } from "./contract.js";
import type {
  ListFbsActPostingsRequest,
  ListFbsActPostingsResponse,
} from "./types.js";
export const LIST_FBS_ACT_POSTINGS_OPERATION_ID = "PostingAPI_ActPostingList";
export async function executeListFbsActPostings(
  transport: Transport,
  input: ListFbsActPostingsRequest,
  options: OzonRequestOptions = {},
): Promise<ListFbsActPostingsResponse> {
  const response = await transport.request({
    operationId: LIST_FBS_ACT_POSTINGS_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/act/get-postings",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsActPostingsResponseSchema,
    response.body,
    LIST_FBS_ACT_POSTINGS_OPERATION_ID,
  );
}
