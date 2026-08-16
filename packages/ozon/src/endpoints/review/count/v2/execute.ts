import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getReviewCountV2ResponseSchema } from "./contract.js";
import type { GetReviewCountV2Response } from "./types.js";

export const GET_REVIEW_COUNT_V2_OPERATION_ID = "ReviewCountV2";

export async function executeGetReviewCountV2(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetReviewCountV2Response> {
  const response = await transport.request({
    operationId: GET_REVIEW_COUNT_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/review/count",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getReviewCountV2ResponseSchema,
    response.body,
    GET_REVIEW_COUNT_V2_OPERATION_ID,
  );
}
