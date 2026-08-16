import type { Transport } from "#internal-core";
import { ResponseValidationError } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type { GetFbsActPdfRequest, GetFbsActPdfResponse } from "./types.js";
export const GET_FBS_ACT_PDF_OPERATION_ID = "PostingAPI_PostingFBSGetAct";
export async function executeGetFbsActPdf(
  transport: Transport,
  input: GetFbsActPdfRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsActPdfResponse> {
  const response = await transport.request({
    operationId: GET_FBS_ACT_PDF_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/act/get-pdf",
    body: input,
    accept: "application/pdf",
    responseType: "array-buffer",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  if (response.body instanceof ArrayBuffer) return response.body;
  throw new ResponseValidationError(
    `Ozon API returned a non-binary act PDF for operation ${GET_FBS_ACT_PDF_OPERATION_ID}.`,
    {
      operationId: GET_FBS_ACT_PDF_OPERATION_ID,
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
