import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listFbsRatingIndexPostingsResponseSchema } from "./contract.js";
import type {
  ListFbsRatingIndexPostingsRequest,
  ListFbsRatingIndexPostingsResponse,
} from "./types.js";

export const LIST_FBS_RATING_INDEX_POSTINGS_OPERATION_ID =
  "RatingAPI_ListFBSRatingIndexPostingsV1";

/** @internal */
export async function executeListFbsRatingIndexPostings(
  transport: Transport,
  input: ListFbsRatingIndexPostingsRequest,
  options: OzonRequestOptions = {},
): Promise<ListFbsRatingIndexPostingsResponse> {
  const response = await transport.request({
    operationId: LIST_FBS_RATING_INDEX_POSTINGS_OPERATION_ID,
    method: "POST",
    path: "/v1/rating/index/fbs/posting/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listFbsRatingIndexPostingsResponseSchema,
    response.body,
    LIST_FBS_RATING_INDEX_POSTINGS_OPERATION_ID,
  );
}
