import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getRfbsReturnV2ResponseSchema } from "./contract.js";
import type {
  GetRfbsReturnV2Request,
  GetRfbsReturnV2Response,
} from "./types.js";
export const GET_RFBS_RETURN_V2_OPERATION_ID =
  "RFBSReturnsAPI_ReturnsRfbsGetV2";
export async function executeGetRfbsReturnV2(
  transport: Transport,
  input: GetRfbsReturnV2Request,
  options: OzonRequestOptions = {},
): Promise<GetRfbsReturnV2Response> {
  const response = await transport.request({
    operationId: GET_RFBS_RETURN_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/returns/rfbs/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getRfbsReturnV2ResponseSchema,
    response.body,
    GET_RFBS_RETURN_V2_OPERATION_ID,
  );
}
