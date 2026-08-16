import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getAnalyticsDataV1ResponseSchema } from "./contract.js";
import type {
  GetAnalyticsDataV1Request,
  GetAnalyticsDataV1Response,
} from "./types.js";

export const GET_ANALYTICS_DATA_V1_OPERATION_ID =
  "AnalyticsAPI_AnalyticsGetData";

export async function executeGetAnalyticsDataV1(
  transport: Transport,
  input: GetAnalyticsDataV1Request,
  options: OzonRequestOptions = {},
): Promise<GetAnalyticsDataV1Response> {
  const response = await transport.request({
    operationId: GET_ANALYTICS_DATA_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/analytics/data",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getAnalyticsDataV1ResponseSchema,
    response.body,
    GET_ANALYTICS_DATA_V1_OPERATION_ID,
  );
}
