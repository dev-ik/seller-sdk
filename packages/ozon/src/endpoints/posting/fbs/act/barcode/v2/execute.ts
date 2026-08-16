import type { Transport } from "#internal-core";
import { ResponseValidationError } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  GetFbsActBarcodeRequest,
  GetFbsActBarcodeResponse,
} from "./types.js";
export const GET_FBS_ACT_BARCODE_OPERATION_ID =
  "PostingAPI_PostingFBSGetBarcode";
export async function executeGetFbsActBarcode(
  transport: Transport,
  input: GetFbsActBarcodeRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsActBarcodeResponse> {
  const response = await transport.request({
    operationId: GET_FBS_ACT_BARCODE_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/act/get-barcode",
    body: input,
    accept: "image/png",
    responseType: "array-buffer",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  if (response.body instanceof ArrayBuffer) return response.body;
  throw new ResponseValidationError(
    `Ozon API returned a non-binary barcode for operation ${GET_FBS_ACT_BARCODE_OPERATION_ID}.`,
    {
      operationId: GET_FBS_ACT_BARCODE_OPERATION_ID,
      issues: [
        {
          code: "invalid_type",
          path: [],
          message: "Expected an ArrayBuffer response body.",
          expected: "ArrayBuffer",
          received: typeof response.body,
        },
      ],
    },
  );
}
