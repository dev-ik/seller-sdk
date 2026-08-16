import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getReviewCountV1ResponseSchema } from "./contract.js";
import type { GetReviewCountV1Response } from "./types.js";

export const GET_REVIEW_COUNT_V1_OPERATION_ID = "ReviewAPI_ReviewCount";

export async function executeGetReviewCountV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetReviewCountV1Response> {
  const response = await transport.request({
    operationId: GET_REVIEW_COUNT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/review/count",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getReviewCountV1ResponseSchema,
    response.body,
    GET_REVIEW_COUNT_V1_OPERATION_ID,
  );
}
