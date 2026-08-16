import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getAnalyticsProductQueryDetailsV1ResponseSchema } from "./contract.js";
import type {
  GetAnalyticsProductQueryDetailsV1Request,
  GetAnalyticsProductQueryDetailsV1Response,
} from "./types.js";

export const GET_ANALYTICS_PRODUCT_QUERY_DETAILS_V1_OPERATION_ID =
  "AnalyticsAPI_AnalyticsProductQueriesDetails";

export async function executeGetAnalyticsProductQueryDetailsV1(
  transport: Transport,
  input: GetAnalyticsProductQueryDetailsV1Request,
  options: OzonRequestOptions = {},
): Promise<GetAnalyticsProductQueryDetailsV1Response> {
  const response = await transport.request({
    operationId: GET_ANALYTICS_PRODUCT_QUERY_DETAILS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/analytics/product-queries/details",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getAnalyticsProductQueryDetailsV1ResponseSchema,
    response.body,
    GET_ANALYTICS_PRODUCT_QUERY_DETAILS_V1_OPERATION_ID,
  );
}
