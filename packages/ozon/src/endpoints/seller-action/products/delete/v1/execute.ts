import type { Transport } from "#internal-core";
import type { OzonRequestOptions } from "../../../../../request-options.js";
import { executeSellerActionVoid } from "../../../shared/v1/execute.js";
import type {
  DeleteSellerActionProductsV1Request,
  DeleteSellerActionProductsV1Response,
} from "./types.js";
export const DELETE_SELLER_ACTION_PRODUCTS_V1_OPERATION_ID =
  "SellerActionsProductsDelete";
export function executeDeleteSellerActionProductsV1(
  transport: Transport,
  input: DeleteSellerActionProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<DeleteSellerActionProductsV1Response> {
  return executeSellerActionVoid(
    transport,
    DELETE_SELLER_ACTION_PRODUCTS_V1_OPERATION_ID,
    "/v1/seller-actions/products/delete",
    input,
    options,
  );
}
