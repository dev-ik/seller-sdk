import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listReviewsV1ResponseSchema } from "./contract.js";
import type { ListReviewsV1Request, ListReviewsV1Response } from "./types.js";

export const LIST_REVIEWS_V1_OPERATION_ID = "ReviewAPI_ReviewList";

export async function executeListReviewsV1(
  transport: Transport,
  input: ListReviewsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListReviewsV1Response> {
  const response = await transport.request({
    operationId: LIST_REVIEWS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/review/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listReviewsV1ResponseSchema,
    response.body,
    LIST_REVIEWS_V1_OPERATION_ID,
  );
}
