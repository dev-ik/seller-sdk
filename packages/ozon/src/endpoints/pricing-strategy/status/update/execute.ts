import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { updatePricingStrategyStatusResponseSchema } from "./contract.js";
import type {
  UpdatePricingStrategyStatusRequest,
  UpdatePricingStrategyStatusResponse,
} from "./types.js";

export const UPDATE_PRICING_STRATEGY_STATUS_OPERATION_ID = "pricing_status";

export async function executeUpdatePricingStrategyStatus(
  transport: Transport,
  input: UpdatePricingStrategyStatusRequest,
  options: OzonRequestOptions = {},
): Promise<UpdatePricingStrategyStatusResponse> {
  const response = await transport.request({
    operationId: UPDATE_PRICING_STRATEGY_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/status",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    updatePricingStrategyStatusResponseSchema,
    response.body,
    UPDATE_PRICING_STRATEGY_STATUS_OPERATION_ID,
  );
}
