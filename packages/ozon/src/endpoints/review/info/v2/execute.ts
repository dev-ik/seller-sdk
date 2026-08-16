import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getReviewInfoV2ResponseSchema } from "./contract.js";
import type {
  GetReviewInfoV2Request,
  GetReviewInfoV2Response,
} from "./types.js";

export const GET_REVIEW_INFO_V2_OPERATION_ID = "ReviewInfoV2";

export async function executeGetReviewInfoV2(
  transport: Transport,
  input: GetReviewInfoV2Request,
  options: OzonRequestOptions = {},
): Promise<GetReviewInfoV2Response> {
  const response = await transport.request({
    operationId: GET_REVIEW_INFO_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/review/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getReviewInfoV2ResponseSchema,
    response.body,
    GET_REVIEW_INFO_V2_OPERATION_ID,
  );
}
