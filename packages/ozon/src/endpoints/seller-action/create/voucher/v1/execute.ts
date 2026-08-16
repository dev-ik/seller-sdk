import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { sellerActionCreatedResponseSchema } from "../../../shared/v1/contract.js";
import type {
  CreateSellerVoucherActionV1Request,
  CreateSellerVoucherActionV1Response,
} from "./types.js";

export const CREATE_SELLER_VOUCHER_ACTION_V1_OPERATION_ID =
  "SellerActionsCreateVoucher";

export async function executeCreateSellerVoucherActionV1(
  transport: Transport,
  input: CreateSellerVoucherActionV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateSellerVoucherActionV1Response> {
  const response = await transport.request({
    operationId: CREATE_SELLER_VOUCHER_ACTION_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/create/voucher",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    sellerActionCreatedResponseSchema,
    response.body,
    CREATE_SELLER_VOUCHER_ACTION_V1_OPERATION_ID,
  );
}
