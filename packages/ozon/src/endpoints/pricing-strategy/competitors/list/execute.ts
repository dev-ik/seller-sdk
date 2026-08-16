import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listPricingCompetitorsResponseSchema } from "./contract.js";
import type {
  ListPricingCompetitorsRequest,
  ListPricingCompetitorsResponse,
} from "./types.js";

export const LIST_PRICING_COMPETITORS_OPERATION_ID = "pricing_competitors";

export async function executeListPricingCompetitors(
  transport: Transport,
  input: ListPricingCompetitorsRequest,
  options: OzonRequestOptions = {},
): Promise<ListPricingCompetitorsResponse> {
  const response = await transport.request({
    operationId: LIST_PRICING_COMPETITORS_OPERATION_ID,
    method: "POST",
    path: "/v1/pricing-strategy/competitors/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listPricingCompetitorsResponseSchema,
    response.body,
    LIST_PRICING_COMPETITORS_OPERATION_ID,
  );
}
