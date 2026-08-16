import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listDigitalPostingsResponseSchema } from "./contract.js";
import type {
  ListDigitalPostingsRequest,
  ListDigitalPostingsResponse,
} from "./types.js";

export const LIST_DIGITAL_POSTINGS_OPERATION_ID = "ListPostingCodes";

/** @internal */
export async function executeListDigitalPostings(
  transport: Transport,
  input: ListDigitalPostingsRequest,
  options: OzonRequestOptions = {},
): Promise<ListDigitalPostingsResponse> {
  const response = await transport.request({
    operationId: LIST_DIGITAL_POSTINGS_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/digital/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listDigitalPostingsResponseSchema,
    response.body,
    LIST_DIGITAL_POSTINGS_OPERATION_ID,
  );
}
