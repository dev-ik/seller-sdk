import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { uploadDigitalPostingCodesResponseSchema } from "./contract.js";
import type {
  UploadDigitalPostingCodesRequest,
  UploadDigitalPostingCodesResponse,
} from "./types.js";

export const UPLOAD_DIGITAL_POSTING_CODES_OPERATION_ID = "UploadPostingCodes";

/** @internal */
export async function executeUploadDigitalPostingCodes(
  transport: Transport,
  input: UploadDigitalPostingCodesRequest,
  options: OzonRequestOptions = {},
): Promise<UploadDigitalPostingCodesResponse> {
  const response = await transport.request({
    operationId: UPLOAD_DIGITAL_POSTING_CODES_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/digital/codes/upload",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    uploadDigitalPostingCodesResponseSchema,
    response.body,
    UPLOAD_DIGITAL_POSTING_CODES_OPERATION_ID,
  );
}
