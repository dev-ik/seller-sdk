import type { Transport } from "#internal-core";
import type { OzonRequestOptions } from "../../../../../request-options.js";
import { executeSellerActionVoid } from "../../../shared/v1/execute.js";
import type {
  UpdateSellerVoucherActionV1Request,
  UpdateSellerVoucherActionV1Response,
} from "./types.js";
export const UPDATE_SELLER_VOUCHER_ACTION_V1_OPERATION_ID =
  "SellerActionsUpdateVoucher";
export function executeUpdateSellerVoucherActionV1(
  transport: Transport,
  input: UpdateSellerVoucherActionV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateSellerVoucherActionV1Response> {
  return executeSellerActionVoid(
    transport,
    UPDATE_SELLER_VOUCHER_ACTION_V1_OPERATION_ID,
    "/v1/seller-actions/update/voucher",
    input,
    options,
  );
}
