import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { deleteProductsFromPricingStrategyResponseSchema } from "./contract.js";
import type {
  DeleteProductsFromPricingStrategyRequest,
  DeleteProductsFromPricingStrategyResponse,
} from "./types.js";

export const DELETE_PRODUCTS_FROM_PRICING_STRATEGY_OPERATION_ID =
  "pricing_items-delete";

export async function executeDeleteProductsFromPricingStrategy(
  transport: Transport,
  input: DeleteProductsFromPricingStrategyRequest,
  options: OzonRequestOptions = {},
): Promise<DeleteProductsFromPricingStrategyResponse> {
  const response = await transport.request({
    operationId: DELETE_PRODUCTS_FROM_PRICING_STRATEGY_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/products/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    deleteProductsFromPricingStrategyResponseSchema,
    response.body,
    DELETE_PRODUCTS_FROM_PRICING_STRATEGY_OPERATION_ID,
  );
}
