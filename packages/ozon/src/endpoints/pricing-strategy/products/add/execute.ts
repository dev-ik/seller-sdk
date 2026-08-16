import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { addProductsToPricingStrategyResponseSchema } from "./contract.js";
import type {
  AddProductsToPricingStrategyRequest,
  AddProductsToPricingStrategyResponse,
} from "./types.js";

export const ADD_PRODUCTS_TO_PRICING_STRATEGY_OPERATION_ID =
  "pricing_items-add";

export async function executeAddProductsToPricingStrategy(
  transport: Transport,
  input: AddProductsToPricingStrategyRequest,
  options: OzonRequestOptions = {},
): Promise<AddProductsToPricingStrategyResponse> {
  const response = await transport.request({
    operationId: ADD_PRODUCTS_TO_PRICING_STRATEGY_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/products/add",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    addProductsToPricingStrategyResponseSchema,
    response.body,
    ADD_PRODUCTS_TO_PRICING_STRATEGY_OPERATION_ID,
  );
}
