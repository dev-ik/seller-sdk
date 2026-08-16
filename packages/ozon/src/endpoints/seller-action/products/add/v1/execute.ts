import type { Transport } from "#internal-core";
import type { OzonRequestOptions } from "../../../../../request-options.js";
import { executeSellerActionVoid } from "../../../shared/v1/execute.js";
import type {
  AddSellerActionProductsV1Request,
  AddSellerActionProductsV1Response,
} from "./types.js";
export const ADD_SELLER_ACTION_PRODUCTS_V1_OPERATION_ID =
  "SellerActionsProductsAdd";
export function executeAddSellerActionProductsV1(
  transport: Transport,
  input: AddSellerActionProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<AddSellerActionProductsV1Response> {
  return executeSellerActionVoid(
    transport,
    ADD_SELLER_ACTION_PRODUCTS_V1_OPERATION_ID,
    "/v1/seller-actions/products/add",
    input,
    options,
  );
}
