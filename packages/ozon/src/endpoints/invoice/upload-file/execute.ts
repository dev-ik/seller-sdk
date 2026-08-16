import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { uploadInvoiceFileResponseSchema } from "./contract.js";
import type {
  UploadInvoiceFileRequest,
  UploadInvoiceFileResponse,
} from "./types.js";
export const UPLOAD_INVOICE_FILE_OPERATION_ID = "invoice_upload";
export async function executeUploadInvoiceFile(
  transport: Transport,
  input: UploadInvoiceFileRequest,
  options: OzonRequestOptions = {},
): Promise<UploadInvoiceFileResponse> {
  const response = await transport.request({
    operationId: UPLOAD_INVOICE_FILE_OPERATION_ID,
    method: "POST",
    path: "/v1/invoice/file/upload",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    uploadInvoiceFileResponseSchema,
    response.body,
    UPLOAD_INVOICE_FILE_OPERATION_ID,
  );
}
