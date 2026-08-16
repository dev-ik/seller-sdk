import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import type {
  UpdateSellerDiscountActionV1Request,
  UpdateSellerDiscountActionV1Response,
} from "./types.js";

export const UPDATE_SELLER_DISCOUNT_ACTION_V1_OPERATION_ID =
  "SellerActionsUpdateDiscount";

export async function executeUpdateSellerDiscountActionV1(
  transport: Transport,
  input: UpdateSellerDiscountActionV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateSellerDiscountActionV1Response> {
  await transport.request({
    operationId: UPDATE_SELLER_DISCOUNT_ACTION_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/update/discount",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
