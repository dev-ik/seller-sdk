import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listFbsAssemblyPostingsResponseSchema } from "./contract.js";
import type {
  ListFbsAssemblyPostingsRequest,
  ListFbsAssemblyPostingsResponse,
} from "./types.js";

export const LIST_FBS_ASSEMBLY_POSTINGS_OPERATION_ID = "AssemblyFbsPostingList";

export async function executeListFbsAssemblyPostings(
  transport: Transport,
  input: ListFbsAssemblyPostingsRequest,
  options: OzonRequestOptions = {},
): Promise<ListFbsAssemblyPostingsResponse> {
  const response = await transport.request({
    operationId: LIST_FBS_ASSEMBLY_POSTINGS_OPERATION_ID,
    method: "POST",
    path: "/v1/assembly/fbs/posting/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsAssemblyPostingsResponseSchema,
    response.body,
    LIST_FBS_ASSEMBLY_POSTINGS_OPERATION_ID,
  );
}
