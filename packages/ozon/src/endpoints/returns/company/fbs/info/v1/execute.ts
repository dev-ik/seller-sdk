import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsReturnCompanyInfoV1ResponseSchema } from "./contract.js";
import type {
  GetFbsReturnCompanyInfoV1Request,
  GetFbsReturnCompanyInfoV1Response,
} from "./types.js";
export const GET_FBS_RETURN_COMPANY_INFO_V1_OPERATION_ID =
  "returnsCompanyFBSInfo";
export async function executeGetFbsReturnCompanyInfoV1(
  transport: Transport,
  input: GetFbsReturnCompanyInfoV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbsReturnCompanyInfoV1Response> {
  const response = await transport.request({
    operationId: GET_FBS_RETURN_COMPANY_INFO_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/returns/company/fbs/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsReturnCompanyInfoV1ResponseSchema,
    response.body,
    GET_FBS_RETURN_COMPANY_INFO_V1_OPERATION_ID,
  );
}
