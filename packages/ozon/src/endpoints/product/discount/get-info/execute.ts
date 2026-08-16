import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getDiscountedProductInfoResponseSchema } from "./contract.js";
import type {
  GetDiscountedProductInfoRequest,
  GetDiscountedProductInfoResponse,
} from "./types.js";

export const GET_DISCOUNTED_PRODUCT_INFO_OPERATION_ID =
  "ProductAPI_GetProductInfoDiscounted";

export async function executeGetDiscountedProductInfo(
  transport: Transport,
  input: GetDiscountedProductInfoRequest,
  options: OzonRequestOptions = {},
): Promise<GetDiscountedProductInfoResponse> {
  const response = await transport.request({
    operationId: GET_DISCOUNTED_PRODUCT_INFO_OPERATION_ID,
    method: "POST",
    path: "/v1/product/info/discounted",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getDiscountedProductInfoResponseSchema,
    response.body,
    GET_DISCOUNTED_PRODUCT_INFO_OPERATION_ID,
  );
}
