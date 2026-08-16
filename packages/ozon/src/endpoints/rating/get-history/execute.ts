import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getRatingHistoryResponseSchema } from "./contract.js";
import type {
  GetRatingHistoryRequest,
  GetRatingHistoryResponse,
} from "./types.js";

export const GET_RATING_HISTORY_OPERATION_ID = "RatingAPI_RatingHistoryV1";

/** @internal */
export async function executeGetRatingHistory(
  transport: Transport,
  input: GetRatingHistoryRequest,
  options: OzonRequestOptions = {},
): Promise<GetRatingHistoryResponse> {
  const response = await transport.request({
    operationId: GET_RATING_HISTORY_OPERATION_ID,
    method: "POST",
    path: "/v1/rating/history",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getRatingHistoryResponseSchema,
    response.body,
    GET_RATING_HISTORY_OPERATION_ID,
  );
}
