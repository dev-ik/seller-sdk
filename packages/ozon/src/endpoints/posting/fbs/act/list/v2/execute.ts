import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listFbsActsResponseSchema } from "./contract.js";
import type { ListFbsActsRequest, ListFbsActsResponse } from "./types.js";
export const LIST_FBS_ACTS_OPERATION_ID = "PostingAPI_FbsActList";
export async function executeListFbsActs(
  transport: Transport,
  input: ListFbsActsRequest,
  options: OzonRequestOptions = {},
): Promise<ListFbsActsResponse> {
  const response = await transport.request({
    operationId: LIST_FBS_ACTS_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/act/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsActsResponseSchema,
    response.body,
    LIST_FBS_ACTS_OPERATION_ID,
  );
}
