import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { createPricingStrategyResponseSchema } from "./contract.js";
import type {
  CreatePricingStrategyRequest,
  CreatePricingStrategyResponse,
} from "./types.js";

export const CREATE_PRICING_STRATEGY_OPERATION_ID = "pricing_create";

export async function executeCreatePricingStrategy(
  transport: Transport,
  input: CreatePricingStrategyRequest,
  options: OzonRequestOptions = {},
): Promise<CreatePricingStrategyResponse> {
  const response = await transport.request({
    operationId: CREATE_PRICING_STRATEGY_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    createPricingStrategyResponseSchema,
    response.body,
    CREATE_PRICING_STRATEGY_OPERATION_ID,
  );
}
