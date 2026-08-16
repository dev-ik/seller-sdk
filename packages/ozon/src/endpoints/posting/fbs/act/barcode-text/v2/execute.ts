import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsActBarcodeTextResponseSchema } from "./contract.js";
import type {
  GetFbsActBarcodeTextRequest,
  GetFbsActBarcodeTextResponse,
} from "./types.js";
export const GET_FBS_ACT_BARCODE_TEXT_OPERATION_ID =
  "PostingAPI_PostingFBSGetBarcodeText";
export async function executeGetFbsActBarcodeText(
  transport: Transport,
  input: GetFbsActBarcodeTextRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsActBarcodeTextResponse> {
  const response = await transport.request({
    operationId: GET_FBS_ACT_BARCODE_TEXT_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/act/get-barcode/text",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsActBarcodeTextResponseSchema,
    response.body,
    GET_FBS_ACT_BARCODE_TEXT_OPERATION_ID,
  );
}
