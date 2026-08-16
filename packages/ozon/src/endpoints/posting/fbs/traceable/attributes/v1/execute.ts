import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsTraceableAttributesResponseSchema } from "./contract.js";
import type {
  GetFbsTraceableAttributesRequest,
  GetFbsTraceableAttributesResponse,
} from "./types.js";
export const GET_FBS_TRACEABLE_ATTRIBUTES_OPERATION_ID =
  "PostingFbsProductTraceableAttribute";
export async function executeGetFbsTraceableAttributes(
  transport: Transport,
  input: GetFbsTraceableAttributesRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsTraceableAttributesResponse> {
  const response = await transport.request({
    operationId: GET_FBS_TRACEABLE_ATTRIBUTES_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbs/product/traceable/attribute",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsTraceableAttributesResponseSchema,
    response.body,
    GET_FBS_TRACEABLE_ATTRIBUTES_OPERATION_ID,
  );
}
