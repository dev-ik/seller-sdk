import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getPricingStrategyProductInfoResponseSchema } from "./contract.js";
import type {
  GetPricingStrategyProductInfoRequest,
  GetPricingStrategyProductInfoResponse,
} from "./types.js";

export const GET_PRICING_STRATEGY_PRODUCT_INFO_OPERATION_ID =
  "pricing_items-info";

export async function executeGetPricingStrategyProductInfo(
  transport: Transport,
  input: GetPricingStrategyProductInfoRequest,
  options: OzonRequestOptions = {},
): Promise<GetPricingStrategyProductInfoResponse> {
  const response = await transport.request({
    operationId: GET_PRICING_STRATEGY_PRODUCT_INFO_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/product/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getPricingStrategyProductInfoResponseSchema,
    response.body,
    GET_PRICING_STRATEGY_PRODUCT_INFO_OPERATION_ID,
  );
}
