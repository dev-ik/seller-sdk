import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { sellerActionProductsPageSchema } from "../../../shared/v1/contract.js";
import type {
  ListSellerActionProductsV1Request,
  ListSellerActionProductsV1Response,
} from "./types.js";
export const LIST_SELLER_ACTION_PRODUCTS_V1_OPERATION_ID =
  "SellerActionsProductsList";
export async function executeListSellerActionProductsV1(
  transport: Transport,
  input: ListSellerActionProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListSellerActionProductsV1Response> {
  const response = await transport.request({
    operationId: LIST_SELLER_ACTION_PRODUCTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/products/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    sellerActionProductsPageSchema,
    response.body,
    LIST_SELLER_ACTION_PRODUCTS_V1_OPERATION_ID,
  );
}
