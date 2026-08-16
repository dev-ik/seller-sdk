import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listPricingStrategiesResponseSchema } from "./contract.js";
import type {
  ListPricingStrategiesRequest,
  ListPricingStrategiesResponse,
} from "./types.js";

export const LIST_PRICING_STRATEGIES_OPERATION_ID = "pricing_list";

export async function executeListPricingStrategies(
  transport: Transport,
  input: ListPricingStrategiesRequest,
  options: OzonRequestOptions = {},
): Promise<ListPricingStrategiesResponse> {
  const response = await transport.request({
    operationId: LIST_PRICING_STRATEGIES_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listPricingStrategiesResponseSchema,
    response.body,
    LIST_PRICING_STRATEGIES_OPERATION_ID,
  );
}
