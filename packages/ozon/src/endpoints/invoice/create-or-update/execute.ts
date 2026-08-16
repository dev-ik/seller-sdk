import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { createOrUpdateInvoiceResponseSchema } from "./contract.js";
import type {
  CreateOrUpdateInvoiceRequest,
  CreateOrUpdateInvoiceResponse,
} from "./types.js";
export const CREATE_OR_UPDATE_INVOICE_OPERATION_ID =
  "InvoiceAPI_InvoiceCreateOrUpdateV2";
export async function executeCreateOrUpdateInvoice(
  transport: Transport,
  input: CreateOrUpdateInvoiceRequest,
  options: OzonRequestOptions = {},
): Promise<CreateOrUpdateInvoiceResponse> {
  const response = await transport.request({
    operationId: CREATE_OR_UPDATE_INVOICE_OPERATION_ID,
    method: "POST",
    path: "/v2/invoice/create-or-update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createOrUpdateInvoiceResponseSchema,
    response.body,
    CREATE_OR_UPDATE_INVOICE_OPERATION_ID,
  );
}
