import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import type {
  DeleteReviewCommentV2Request,
  DeleteReviewCommentV2Response,
} from "./types.js";

export const DELETE_REVIEW_COMMENT_V2_OPERATION_ID = "ReviewCommentDeleteV2";

export async function executeDeleteReviewCommentV2(
  transport: Transport,
  input: DeleteReviewCommentV2Request,
  options: OzonRequestOptions = {},
): Promise<DeleteReviewCommentV2Response> {
  await transport.request({
    operationId: DELETE_REVIEW_COMMENT_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/review/comment/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
