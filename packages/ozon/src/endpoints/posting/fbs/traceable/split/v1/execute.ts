import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { splitTraceableFbsPostingResponseSchema } from "./contract.js";
import type {
  SplitTraceableFbsPostingRequest,
  SplitTraceableFbsPostingResponse,
} from "./types.js";
export const SPLIT_TRACEABLE_FBS_POSTING_OPERATION_ID =
  "PostingFbsTraceableSplit";
export async function executeSplitTraceableFbsPosting(
  transport: Transport,
  input: SplitTraceableFbsPostingRequest,
  options: OzonRequestOptions = {},
): Promise<SplitTraceableFbsPostingResponse> {
  const response = await transport.request({
    operationId: SPLIT_TRACEABLE_FBS_POSTING_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbs/traceable/split",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    splitTraceableFbsPostingResponseSchema,
    response.body,
    SPLIT_TRACEABLE_FBS_POSTING_OPERATION_ID,
  );
}
