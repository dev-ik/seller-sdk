import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFbsPostingsV3ResponseSchema } from "./contract.js";
import type {
  ListFbsPostingsV3Request,
  ListFbsPostingsV3Response,
} from "./types.js";

export const LIST_FBS_POSTINGS_V3_OPERATION_ID =
  "PostingAPI_GetFbsPostingListV3";

/** @deprecated Ozon plans to disable this version on 2026-08-31. */
export async function executeListFbsPostingsV3(
  transport: Transport,
  input: ListFbsPostingsV3Request,
  options: OzonRequestOptions = {},
): Promise<ListFbsPostingsV3Response> {
  const response = await transport.request({
    operationId: LIST_FBS_POSTINGS_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/posting/fbs/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsPostingsV3ResponseSchema,
    response.body,
    LIST_FBS_POSTINGS_V3_OPERATION_ID,
  );
}
