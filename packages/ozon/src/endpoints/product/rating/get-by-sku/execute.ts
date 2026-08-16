import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductRatingBySkuResponseSchema } from "./contract.js";
import type {
  GetProductRatingBySkuRequest,
  GetProductRatingBySkuResponse,
} from "./types.js";

export const GET_PRODUCT_RATING_BY_SKU_OPERATION_ID =
  "ProductAPI_GetProductRatingBySku";

export async function executeGetProductRatingBySku(
  transport: Transport,
  input: GetProductRatingBySkuRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductRatingBySkuResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_RATING_BY_SKU_OPERATION_ID,
    method: "POST",
    path: "/v1/product/rating-by-sku",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductRatingBySkuResponseSchema,
    response.body,
    GET_PRODUCT_RATING_BY_SKU_OPERATION_ID,
  );
}
