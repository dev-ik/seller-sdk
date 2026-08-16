import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listFbsPostingProductCountriesV2ResponseSchema } from "./contract.js";
import type {
  ListFbsPostingProductCountriesV2Request,
  ListFbsPostingProductCountriesV2Response,
} from "./types.js";
export const LIST_FBS_POSTING_PRODUCT_COUNTRIES_V2_OPERATION_ID =
  "PostingAPI_ListCountryProductFbsPostingV2";
export async function executeListFbsPostingProductCountriesV2(
  transport: Transport,
  input: ListFbsPostingProductCountriesV2Request = {},
  options: OzonRequestOptions = {},
): Promise<ListFbsPostingProductCountriesV2Response> {
  const response = await transport.request({
    operationId: LIST_FBS_POSTING_PRODUCT_COUNTRIES_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/product/country/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsPostingProductCountriesV2ResponseSchema,
    response.body,
    LIST_FBS_POSTING_PRODUCT_COUNTRIES_V2_OPERATION_ID,
  );
}
