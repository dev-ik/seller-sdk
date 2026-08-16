import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listAnalyticsProductQueriesV1ResponseSchema } from "./contract.js";
import type {
  ListAnalyticsProductQueriesV1Request,
  ListAnalyticsProductQueriesV1Response,
} from "./types.js";

export const LIST_ANALYTICS_PRODUCT_QUERIES_V1_OPERATION_ID =
  "AnalyticsAPI_AnalyticsProductQueries";

export async function executeListAnalyticsProductQueriesV1(
  transport: Transport,
  input: ListAnalyticsProductQueriesV1Request,
  options: OzonRequestOptions = {},
): Promise<ListAnalyticsProductQueriesV1Response> {
  const response = await transport.request({
    operationId: LIST_ANALYTICS_PRODUCT_QUERIES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/analytics/product-queries",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listAnalyticsProductQueriesV1ResponseSchema,
    response.body,
    LIST_ANALYTICS_PRODUCT_QUERIES_V1_OPERATION_ID,
  );
}
