import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listReviewsV2ResponseSchema } from "./contract.js";
import type { ListReviewsV2Request, ListReviewsV2Response } from "./types.js";

export const LIST_REVIEWS_V2_OPERATION_ID = "ReviewListV2";

export async function executeListReviewsV2(
  transport: Transport,
  input: ListReviewsV2Request,
  options: OzonRequestOptions = {},
): Promise<ListReviewsV2Response> {
  const response = await transport.request({
    operationId: LIST_REVIEWS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/review/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listReviewsV2ResponseSchema,
    response.body,
    LIST_REVIEWS_V2_OPERATION_ID,
  );
}
