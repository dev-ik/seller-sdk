import type { Transport } from "#internal-core";
import type { OzonRequestOptions } from "../../../../../request-options.js";
import { executeSellerActionVoid } from "../../../shared/v1/execute.js";
import type {
  UpdateSellerMultiLevelDiscountActionV1Request,
  UpdateSellerMultiLevelDiscountActionV1Response,
} from "./types.js";
export const UPDATE_SELLER_MULTI_LEVEL_DISCOUNT_ACTION_V1_OPERATION_ID =
  "SellerActionsUpdateMultiLevelDiscount";
export function executeUpdateSellerMultiLevelDiscountActionV1(
  transport: Transport,
  input: UpdateSellerMultiLevelDiscountActionV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateSellerMultiLevelDiscountActionV1Response> {
  return executeSellerActionVoid(
    transport,
    UPDATE_SELLER_MULTI_LEVEL_DISCOUNT_ACTION_V1_OPERATION_ID,
    "/v1/seller-actions/update/multi-level-discount",
    input,
    options,
  );
}
