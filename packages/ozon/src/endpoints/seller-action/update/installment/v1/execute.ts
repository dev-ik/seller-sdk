import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import type {
  UpdateSellerInstallmentActionV1Request,
  UpdateSellerInstallmentActionV1Response,
} from "./types.js";

export const UPDATE_SELLER_INSTALLMENT_ACTION_V1_OPERATION_ID =
  "SellerActionsUpdateInstallment";

export async function executeUpdateSellerInstallmentActionV1(
  transport: Transport,
  input: UpdateSellerInstallmentActionV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateSellerInstallmentActionV1Response> {
  await transport.request({
    operationId: UPDATE_SELLER_INSTALLMENT_ACTION_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/update/installment",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
