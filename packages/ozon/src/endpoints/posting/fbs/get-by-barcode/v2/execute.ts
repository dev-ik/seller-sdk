import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getFbsPostingByBarcodeV2ResponseSchema } from "./contract.js";
import type {
  GetFbsPostingByBarcodeV2Request,
  GetFbsPostingByBarcodeV2Response,
} from "./types.js";
export const GET_FBS_POSTING_BY_BARCODE_V2_OPERATION_ID =
  "PostingAPI_GetFbsPostingByBarcode";
export async function executeGetFbsPostingByBarcodeV2(
  transport: Transport,
  input: GetFbsPostingByBarcodeV2Request,
  options: OzonRequestOptions = {},
): Promise<GetFbsPostingByBarcodeV2Response> {
  const response = await transport.request({
    operationId: GET_FBS_POSTING_BY_BARCODE_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/get-by-barcode",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsPostingByBarcodeV2ResponseSchema,
    response.body,
    GET_FBS_POSTING_BY_BARCODE_V2_OPERATION_ID,
  );
}
