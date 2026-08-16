import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { promotionProductsPageResponseSchema } from "../shared/contract.js";
import type {
  ListPromotionProductsRequest,
  ListPromotionProductsResponse,
} from "./types.js";

export const LIST_PROMOTION_PRODUCTS_OPERATION_ID = "PromosProducts";

export async function executeListPromotionProducts(
  transport: Transport,
  input: ListPromotionProductsRequest,
  options: OzonRequestOptions = {},
): Promise<ListPromotionProductsResponse> {
  const response = await transport.request({
    operationId: LIST_PROMOTION_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/products",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    promotionProductsPageResponseSchema,
    response.body,
    LIST_PROMOTION_PRODUCTS_OPERATION_ID,
  );
}
