import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { deactivatePromotionProductsV2ResponseSchema } from "./contract.js";
import type {
  DeactivatePromotionProductsV2Request,
  DeactivatePromotionProductsV2Response,
} from "./types.js";
export const DEACTIVATE_PROMOTION_PRODUCTS_V2_OPERATION_ID =
  "ActionsProductsDeactivate";
export async function executeDeactivatePromotionProductsV2(
  transport: Transport,
  input: DeactivatePromotionProductsV2Request,
  options: OzonRequestOptions = {},
): Promise<DeactivatePromotionProductsV2Response> {
  const response = await transport.request({
    operationId: DEACTIVATE_PROMOTION_PRODUCTS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/actions/products/deactivate",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    deactivatePromotionProductsV2ResponseSchema,
    response.body,
    DEACTIVATE_PROMOTION_PRODUCTS_V2_OPERATION_ID,
  );
}
