import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getInvoiceResponseSchema } from "./contract.js";
import type { GetInvoiceRequest, GetInvoiceResponse } from "./types.js";
export const GET_INVOICE_OPERATION_ID = "invoice_getV2";
export async function executeGetInvoice(
  transport: Transport,
  input: GetInvoiceRequest,
  options: OzonRequestOptions = {},
): Promise<GetInvoiceResponse> {
  const response = await transport.request({
    operationId: GET_INVOICE_OPERATION_ID,
    method: "POST",
    path: "/v2/invoice/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getInvoiceResponseSchema,
    response.body,
    GET_INVOICE_OPERATION_ID,
  );
}
