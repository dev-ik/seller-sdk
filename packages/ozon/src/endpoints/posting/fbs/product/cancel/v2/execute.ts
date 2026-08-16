import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { cancelFbsPostingProductsV2ResponseSchema } from "./contract.js";
import type {
  CancelFbsPostingProductsV2Request,
  CancelFbsPostingProductsV2Response,
} from "./types.js";
export const CANCEL_FBS_POSTING_PRODUCTS_V2_OPERATION_ID =
  "PostingAPI_CancelFbsPostingProduct";
export async function executeCancelFbsPostingProductsV2(
  transport: Transport,
  input: CancelFbsPostingProductsV2Request,
  options: OzonRequestOptions = {},
): Promise<CancelFbsPostingProductsV2Response> {
  const response = await transport.request({
    operationId: CANCEL_FBS_POSTING_PRODUCTS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/product/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    cancelFbsPostingProductsV2ResponseSchema,
    response.body,
    CANCEL_FBS_POSTING_PRODUCTS_V2_OPERATION_ID,
  );
}
