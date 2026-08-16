import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { promotionProductsChangeResponseSchema } from "../shared/contract.js";
import type {
  DeactivatePromotionProductsRequest,
  DeactivatePromotionProductsResponse,
} from "./types.js";

export const DEACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID =
  "PromosProductsDeactivate";

export async function executeDeactivatePromotionProducts(
  transport: Transport,
  input: DeactivatePromotionProductsRequest,
  options: OzonRequestOptions = {},
): Promise<DeactivatePromotionProductsResponse> {
  const response = await transport.request({
    operationId: DEACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/products/deactivate",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    promotionProductsChangeResponseSchema,
    response.body,
    DEACTIVATE_PROMOTION_PRODUCTS_OPERATION_ID,
  );
}
