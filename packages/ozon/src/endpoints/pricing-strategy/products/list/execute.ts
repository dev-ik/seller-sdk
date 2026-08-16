import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listPricingStrategyProductsResponseSchema } from "./contract.js";
import type {
  ListPricingStrategyProductsRequest,
  ListPricingStrategyProductsResponse,
} from "./types.js";

export const LIST_PRICING_STRATEGY_PRODUCTS_OPERATION_ID = "pricing_items-list";

export async function executeListPricingStrategyProducts(
  transport: Transport,
  input: ListPricingStrategyProductsRequest,
  options: OzonRequestOptions = {},
): Promise<ListPricingStrategyProductsResponse> {
  const response = await transport.request({
    operationId: LIST_PRICING_STRATEGY_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/products/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listPricingStrategyProductsResponseSchema,
    response.body,
    LIST_PRICING_STRATEGY_PRODUCTS_OPERATION_ID,
  );
}
