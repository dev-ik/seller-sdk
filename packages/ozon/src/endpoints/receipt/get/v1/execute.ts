import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getReceiptV1ResponseSchema } from "./contract.js";
import type { GetReceiptV1Request, GetReceiptV1Response } from "./types.js";

export const GET_RECEIPT_V1_OPERATION_ID = "GetReceipt";

export async function executeGetReceiptV1(
  transport: Transport,
  input: GetReceiptV1Request,
  options: OzonRequestOptions = {},
): Promise<GetReceiptV1Response> {
  const response = await transport.request({
    operationId: GET_RECEIPT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/receipts/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getReceiptV1ResponseSchema,
    response.body,
    GET_RECEIPT_V1_OPERATION_ID,
  );
}
