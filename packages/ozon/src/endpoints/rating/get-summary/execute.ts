import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getRatingSummaryResponseSchema } from "./contract.js";
import type { GetRatingSummaryResponse } from "./types.js";

export const GET_RATING_SUMMARY_OPERATION_ID = "RatingAPI_RatingSummaryV1";

/** @internal */
export async function executeGetRatingSummary(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetRatingSummaryResponse> {
  const response = await transport.request({
    operationId: GET_RATING_SUMMARY_OPERATION_ID,
    method: "POST",
    path: "/v1/rating/summary",
    body: {},
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getRatingSummaryResponseSchema,
    response.body,
    GET_RATING_SUMMARY_OPERATION_ID,
  );
}
