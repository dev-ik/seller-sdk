import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getFboPostingMarksResponseSchema } from "./contract.js";
import type {
  GetFboPostingMarksRequest,
  GetFboPostingMarksResponse,
} from "./types.js";

export const GET_FBO_POSTING_MARKS_OPERATION_ID = "PostingAPI_PostingMarks";

/** @internal */
export async function executeGetFboPostingMarks(
  transport: Transport,
  input: GetFboPostingMarksRequest,
  options: OzonRequestOptions = {},
): Promise<GetFboPostingMarksResponse> {
  const response = await transport.request({
    operationId: GET_FBO_POSTING_MARKS_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/marks",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getFboPostingMarksResponseSchema,
    response.body,
    GET_FBO_POSTING_MARKS_OPERATION_ID,
  );
}
