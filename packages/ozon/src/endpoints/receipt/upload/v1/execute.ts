import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { uploadReceiptV1ResponseSchema } from "./contract.js";
import type {
  UploadReceiptV1Request,
  UploadReceiptV1Response,
} from "./types.js";

export const UPLOAD_RECEIPT_V1_OPERATION_ID = "UploadReceipt";

export async function executeUploadReceiptV1(
  transport: Transport,
  input: UploadReceiptV1Request,
  options: OzonRequestOptions = {},
): Promise<UploadReceiptV1Response> {
  const body = new FormData();
  if (input.filename === undefined) body.append("content", input.content);
  else body.append("content", input.content, input.filename);
  body.append("operation_type", input.operation_type);
  if (input.parent_receipt_id !== undefined)
    body.append("parent_receipt_id", input.parent_receipt_id);
  for (const postingNumber of input.posting_numbers)
    body.append("posting_numbers", postingNumber);
  body.append("receipt_number", input.receipt_number);
  body.append("type", input.type);

  const response = await transport.request({
    operationId: UPLOAD_RECEIPT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/receipts/upload",
    body,
    bodyEncoding: "form-data",
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    uploadReceiptV1ResponseSchema,
    response.body,
    UPLOAD_RECEIPT_V1_OPERATION_ID,
  );
}
