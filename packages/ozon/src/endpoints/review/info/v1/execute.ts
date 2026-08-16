import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getReviewInfoV1ResponseSchema } from "./contract.js";
import type {
  GetReviewInfoV1Request,
  GetReviewInfoV1Response,
} from "./types.js";

export const GET_REVIEW_INFO_V1_OPERATION_ID = "ReviewAPI_ReviewInfo";

export async function executeGetReviewInfoV1(
  transport: Transport,
  input: GetReviewInfoV1Request,
  options: OzonRequestOptions = {},
): Promise<GetReviewInfoV1Response> {
  const response = await transport.request({
    operationId: GET_REVIEW_INFO_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/review/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getReviewInfoV1ResponseSchema,
    response.body,
    GET_REVIEW_INFO_V1_OPERATION_ID,
  );
}
