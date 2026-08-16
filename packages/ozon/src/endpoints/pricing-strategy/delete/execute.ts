import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { deletePricingStrategyResponseSchema } from "./contract.js";
import type {
  DeletePricingStrategyRequest,
  DeletePricingStrategyResponse,
} from "./types.js";

export const DELETE_PRICING_STRATEGY_OPERATION_ID = "pricing_delete";

export async function executeDeletePricingStrategy(
  transport: Transport,
  input: DeletePricingStrategyRequest,
  options: OzonRequestOptions = {},
): Promise<DeletePricingStrategyResponse> {
  const response = await transport.request({
    operationId: DELETE_PRICING_STRATEGY_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    deletePricingStrategyResponseSchema,
    response.body,
    DELETE_PRICING_STRATEGY_OPERATION_ID,
  );
}
