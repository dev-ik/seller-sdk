import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSellerActionVoucherFileV1ResponseSchema } from "./contract.js";
import type {
  GetSellerActionVoucherFileV1Request,
  GetSellerActionVoucherFileV1Response,
} from "./types.js";
export const GET_SELLER_ACTION_VOUCHER_FILE_V1_OPERATION_ID =
  "SellerActionsVoucherGet";
export async function executeGetSellerActionVoucherFileV1(
  transport: Transport,
  input: GetSellerActionVoucherFileV1Request,
  options: OzonRequestOptions = {},
): Promise<GetSellerActionVoucherFileV1Response> {
  const response = await transport.request({
    operationId: GET_SELLER_ACTION_VOUCHER_FILE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/voucher/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSellerActionVoucherFileV1ResponseSchema,
    response.body,
    GET_SELLER_ACTION_VOUCHER_FILE_V1_OPERATION_ID,
  );
}
