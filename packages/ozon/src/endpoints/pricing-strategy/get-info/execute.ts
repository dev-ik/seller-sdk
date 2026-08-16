import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getPricingStrategyResponseSchema } from "./contract.js";
import type {
  GetPricingStrategyRequest,
  GetPricingStrategyResponse,
} from "./types.js";

export const GET_PRICING_STRATEGY_OPERATION_ID = "pricing_info";

export async function executeGetPricingStrategy(
  transport: Transport,
  input: GetPricingStrategyRequest,
  options: OzonRequestOptions = {},
): Promise<GetPricingStrategyResponse> {
  const response = await transport.request({
    operationId: GET_PRICING_STRATEGY_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getPricingStrategyResponseSchema,
    response.body,
    GET_PRICING_STRATEGY_OPERATION_ID,
  );
}
