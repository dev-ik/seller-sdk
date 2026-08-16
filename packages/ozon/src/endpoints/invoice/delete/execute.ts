import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { deleteInvoiceResponseSchema } from "./contract.js";
import type { DeleteInvoiceRequest, DeleteInvoiceResponse } from "./types.js";
export const DELETE_INVOICE_OPERATION_ID = "invoice_delete";
export async function executeDeleteInvoice(
  transport: Transport,
  input: DeleteInvoiceRequest,
  options: OzonRequestOptions = {},
): Promise<DeleteInvoiceResponse> {
  const response = await transport.request({
    operationId: DELETE_INVOICE_OPERATION_ID,
    method: "POST",
    path: "/v1/invoice/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    deleteInvoiceResponseSchema,
    response.body,
    DELETE_INVOICE_OPERATION_ID,
  );
}
