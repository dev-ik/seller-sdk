import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { deleteReviewCommentV1ResponseSchema } from "./contract.js";
import type {
  DeleteReviewCommentV1Request,
  DeleteReviewCommentV1Response,
} from "./types.js";

export const DELETE_REVIEW_COMMENT_V1_OPERATION_ID = "ReviewAPI_CommentDelete";

export async function executeDeleteReviewCommentV1(
  transport: Transport,
  input: DeleteReviewCommentV1Request,
  options: OzonRequestOptions = {},
): Promise<DeleteReviewCommentV1Response> {
  const response = await transport.request({
    operationId: DELETE_REVIEW_COMMENT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/review/comment/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    deleteReviewCommentV1ResponseSchema,
    response.body,
    DELETE_REVIEW_COMMENT_V1_OPERATION_ID,
  );
}
