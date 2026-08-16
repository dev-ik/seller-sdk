import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import type {
  UpdateSellerDiscountWithConditionActionV1Request,
  UpdateSellerDiscountWithConditionActionV1Response,
} from "./types.js";

export const UPDATE_SELLER_DISCOUNT_WITH_CONDITION_ACTION_V1_OPERATION_ID =
  "SellerActionsUpdateDiscountWithCondition";

export async function executeUpdateSellerDiscountWithConditionActionV1(
  transport: Transport,
  input: UpdateSellerDiscountWithConditionActionV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateSellerDiscountWithConditionActionV1Response> {
  await transport.request({
    operationId: UPDATE_SELLER_DISCOUNT_WITH_CONDITION_ACTION_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/update/discount-with-condition",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
