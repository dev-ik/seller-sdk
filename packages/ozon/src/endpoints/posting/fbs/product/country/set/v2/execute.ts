import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { setFbsPostingProductCountryV2ResponseSchema } from "./contract.js";
import type {
  SetFbsPostingProductCountryV2Request,
  SetFbsPostingProductCountryV2Response,
} from "./types.js";
export const SET_FBS_POSTING_PRODUCT_COUNTRY_V2_OPERATION_ID =
  "PostingAPI_SetCountryProductFbsPostingV2";
export async function executeSetFbsPostingProductCountryV2(
  transport: Transport,
  input: SetFbsPostingProductCountryV2Request,
  options: OzonRequestOptions = {},
): Promise<SetFbsPostingProductCountryV2Response> {
  const response = await transport.request({
    operationId: SET_FBS_POSTING_PRODUCT_COUNTRY_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/product/country/set",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    setFbsPostingProductCountryV2ResponseSchema,
    response.body,
    SET_FBS_POSTING_PRODUCT_COUNTRY_V2_OPERATION_ID,
  );
}
