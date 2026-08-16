import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listReviewCommentsV1ResponseSchema } from "./contract.js";
import type {
  ListReviewCommentsV1Request,
  ListReviewCommentsV1Response,
} from "./types.js";

export const LIST_REVIEW_COMMENTS_V1_OPERATION_ID = "ReviewAPI_CommentList";

export async function executeListReviewCommentsV1(
  transport: Transport,
  input: ListReviewCommentsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListReviewCommentsV1Response> {
  const response = await transport.request({
    operationId: LIST_REVIEW_COMMENTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/review/comment/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listReviewCommentsV1ResponseSchema,
    response.body,
    LIST_REVIEW_COMMENTS_V1_OPERATION_ID,
  );
}
