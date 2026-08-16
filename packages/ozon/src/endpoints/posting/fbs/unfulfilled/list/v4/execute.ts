import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listUnfulfilledFbsPostingsV4ResponseSchema } from "./contract.js";
import type {
  ListUnfulfilledFbsPostingsV4Request,
  ListUnfulfilledFbsPostingsV4Response,
} from "./types.js";

export const LIST_UNFULFILLED_FBS_POSTINGS_V4_OPERATION_ID =
  "PostingFbsUnfulfilledList";

export async function executeListUnfulfilledFbsPostingsV4(
  transport: Transport,
  input: ListUnfulfilledFbsPostingsV4Request,
  options: OzonRequestOptions = {},
): Promise<ListUnfulfilledFbsPostingsV4Response> {
  const response = await transport.request({
    operationId: LIST_UNFULFILLED_FBS_POSTINGS_V4_OPERATION_ID,
    method: "POST",
    path: "/v4/posting/fbs/unfulfilled/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listUnfulfilledFbsPostingsV4ResponseSchema,
    response.body,
    LIST_UNFULFILLED_FBS_POSTINGS_V4_OPERATION_ID,
  );
}
