import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../../request-options.js";
import { listFbsAssemblyCarriagePostingsResponseSchema } from "./contract.js";
import type {
  ListFbsAssemblyCarriagePostingsRequest,
  ListFbsAssemblyCarriagePostingsResponse,
} from "./types.js";
export const LIST_FBS_ASSEMBLY_CARRIAGE_POSTINGS_OPERATION_ID =
  "AssemblyCarriagePostingList";
export async function executeListFbsAssemblyCarriagePostings(
  transport: Transport,
  input: ListFbsAssemblyCarriagePostingsRequest,
  options: OzonRequestOptions = {},
): Promise<ListFbsAssemblyCarriagePostingsResponse> {
  const response = await transport.request({
    operationId: LIST_FBS_ASSEMBLY_CARRIAGE_POSTINGS_OPERATION_ID,
    method: "POST",
    path: "/v1/assembly/carriage/posting/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsAssemblyCarriagePostingsResponseSchema,
    response.body,
    LIST_FBS_ASSEMBLY_CARRIAGE_POSTINGS_OPERATION_ID,
  );
}
