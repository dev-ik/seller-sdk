import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { updatePricingStrategyResponseSchema } from "./contract.js";
import type {
  UpdatePricingStrategyRequest,
  UpdatePricingStrategyResponse,
} from "./types.js";

export const UPDATE_PRICING_STRATEGY_OPERATION_ID = "pricing_update";

export async function executeUpdatePricingStrategy(
  transport: Transport,
  input: UpdatePricingStrategyRequest,
  options: OzonRequestOptions = {},
): Promise<UpdatePricingStrategyResponse> {
  const response = await transport.request({
    operationId: UPDATE_PRICING_STRATEGY_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    updatePricingStrategyResponseSchema,
    response.body,
    UPDATE_PRICING_STRATEGY_OPERATION_ID,
  );
}
