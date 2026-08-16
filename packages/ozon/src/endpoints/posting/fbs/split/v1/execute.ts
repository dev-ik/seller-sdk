import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { splitFbsPostingResponseSchema } from "./contract.js";
import type { SplitFbsPostingResponse } from "./types.js";
export const SPLIT_FBS_POSTING_OPERATION_ID = "FbsSplit";
export async function executeSplitFbsPosting(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<SplitFbsPostingResponse> {
  const response = await transport.request({
    operationId: SPLIT_FBS_POSTING_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbs/split",
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    splitFbsPostingResponseSchema,
    response.body,
    SPLIT_FBS_POSTING_OPERATION_ID,
  );
}
