import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getPricingStrategyIdsByProductIdsResponseSchema } from "./contract.js";
import type {
  GetPricingStrategyIdsByProductIdsRequest,
  GetPricingStrategyIdsByProductIdsResponse,
} from "./types.js";

export const GET_PRICING_STRATEGY_IDS_BY_PRODUCT_IDS_OPERATION_ID =
  "pricing_ids";

export async function executeGetPricingStrategyIdsByProductIds(
  transport: Transport,
  input: GetPricingStrategyIdsByProductIdsRequest,
  options: OzonRequestOptions = {},
): Promise<GetPricingStrategyIdsByProductIdsResponse> {
  const response = await transport.request({
    operationId: GET_PRICING_STRATEGY_IDS_BY_PRODUCT_IDS_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/strategy-ids-by-product-ids",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getPricingStrategyIdsByProductIdsResponseSchema,
    response.body,
    GET_PRICING_STRATEGY_IDS_BY_PRODUCT_IDS_OPERATION_ID,
  );
}
