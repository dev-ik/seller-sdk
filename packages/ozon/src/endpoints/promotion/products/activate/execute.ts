import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { promotionProductsChangeResponseSchema } from "../shared/contract.js";
import type {
  ActivatePromotionProductsRequest,
  ActivatePromotionProductsResponse,
} from "./types.js";

export const ACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID =
  "PromosProductsActivate";

export async function executeActivatePromotionProducts(
  transport: Transport,
  input: ActivatePromotionProductsRequest,
  options: OzonRequestOptions = {},
): Promise<ActivatePromotionProductsResponse> {
  const response = await transport.request({
    operationId: ACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/products/activate",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    promotionProductsChangeResponseSchema,
    response.body,
    ACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID,
  );
}
