import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listSellerReceiptsV1ResponseSchema } from "./contract.js";
import type {
  ListSellerReceiptsV1Request,
  ListSellerReceiptsV1Response,
} from "./types.js";

export const LIST_SELLER_RECEIPTS_V1_OPERATION_ID = "ReceiptsSellerList";

export async function executeListSellerReceiptsV1(
  transport: Transport,
  input: ListSellerReceiptsV1Request = {},
  options: OzonRequestOptions = {},
): Promise<ListSellerReceiptsV1Response> {
  const response = await transport.request({
    operationId: LIST_SELLER_RECEIPTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/receipts/seller/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listSellerReceiptsV1ResponseSchema,
    response.body,
    LIST_SELLER_RECEIPTS_V1_OPERATION_ID,
  );
}
