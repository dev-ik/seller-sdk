import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFbsPostingsV4ResponseSchema } from "./contract.js";
import type {
  ListFbsPostingsV4Request,
  ListFbsPostingsV4Response,
} from "./types.js";

export const LIST_FBS_POSTINGS_V4_OPERATION_ID = "PostingFbsList";

export async function executeListFbsPostingsV4(
  transport: Transport,
  input: ListFbsPostingsV4Request,
  options: OzonRequestOptions = {},
): Promise<ListFbsPostingsV4Response> {
  const response = await transport.request({
    operationId: LIST_FBS_POSTINGS_V4_OPERATION_ID,
    method: "POST",
    path: "/v4/posting/fbs/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsPostingsV4ResponseSchema,
    response.body,
    LIST_FBS_POSTINGS_V4_OPERATION_ID,
  );
}
