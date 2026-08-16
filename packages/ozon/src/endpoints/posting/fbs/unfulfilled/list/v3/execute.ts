import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listUnfulfilledFbsPostingsV3ResponseSchema } from "./contract.js";
import type {
  ListUnfulfilledFbsPostingsV3Request,
  ListUnfulfilledFbsPostingsV3Response,
} from "./types.js";

export const LIST_UNFULFILLED_FBS_POSTINGS_V3_OPERATION_ID =
  "PostingAPI_GetFbsPostingUnfulfilledList";

/** @deprecated Ozon plans to disable this version on 2026-08-31. */
export async function executeListUnfulfilledFbsPostingsV3(
  transport: Transport,
  input: ListUnfulfilledFbsPostingsV3Request,
  options: OzonRequestOptions = {},
): Promise<ListUnfulfilledFbsPostingsV3Response> {
  const response = await transport.request({
    operationId: LIST_UNFULFILLED_FBS_POSTINGS_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/posting/fbs/unfulfilled/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listUnfulfilledFbsPostingsV3ResponseSchema,
    response.body,
    LIST_UNFULFILLED_FBS_POSTINGS_V3_OPERATION_ID,
  );
}
