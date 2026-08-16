import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getFbsRatingIndexInfoResponseSchema } from "./contract.js";
import type { GetFbsRatingIndexInfoResponse } from "./types.js";

export const GET_FBS_RATING_INDEX_INFO_OPERATION_ID =
  "RatingAPI_GetFBSRatingIndexInfoV1";

/** @internal */
export async function executeGetFbsRatingIndexInfo(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetFbsRatingIndexInfoResponse> {
  const response = await transport.request({
    operationId: GET_FBS_RATING_INDEX_INFO_OPERATION_ID,
    method: "POST",
    path: "/v1/rating/index/fbs/info",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getFbsRatingIndexInfoResponseSchema,
    response.body,
    GET_FBS_RATING_INDEX_INFO_OPERATION_ID,
  );
}
