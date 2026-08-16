import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { sellerActionProductsPageSchema } from "../../../shared/v1/contract.js";
import type {
  ListSellerActionProductCandidatesV1Request,
  ListSellerActionProductCandidatesV1Response,
} from "./types.js";
export const LIST_SELLER_ACTION_PRODUCT_CANDIDATES_V1_OPERATION_ID =
  "SellerActionsProductsCandidates";
export async function executeListSellerActionProductCandidatesV1(
  transport: Transport,
  input: ListSellerActionProductCandidatesV1Request,
  options: OzonRequestOptions = {},
): Promise<ListSellerActionProductCandidatesV1Response> {
  const response = await transport.request({
    operationId: LIST_SELLER_ACTION_PRODUCT_CANDIDATES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/products/candidates",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    sellerActionProductsPageSchema,
    response.body,
    LIST_SELLER_ACTION_PRODUCT_CANDIDATES_V1_OPERATION_ID,
  );
}
