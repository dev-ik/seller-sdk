import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductSubscriptionCountsResponseSchema } from "./contract.js";
import type {
  GetProductSubscriptionCountsRequest,
  GetProductSubscriptionCountsResponse,
} from "./types.js";

export const GET_PRODUCT_SUBSCRIPTION_COUNTS_OPERATION_ID =
  "ProductAPI_GetProductInfoSubscription";

export async function executeGetProductSubscriptionCounts(
  transport: Transport,
  input: GetProductSubscriptionCountsRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductSubscriptionCountsResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_SUBSCRIPTION_COUNTS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/info/subscription",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductSubscriptionCountsResponseSchema,
    response.body,
    GET_PRODUCT_SUBSCRIPTION_COUNTS_OPERATION_ID,
  );
}
