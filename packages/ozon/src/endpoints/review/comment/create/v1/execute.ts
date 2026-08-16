import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createReviewCommentV1ResponseSchema } from "./contract.js";
import type {
  CreateReviewCommentV1Request,
  CreateReviewCommentV1Response,
} from "./types.js";

export const CREATE_REVIEW_COMMENT_V1_OPERATION_ID = "ReviewAPI_CommentCreate";

export async function executeCreateReviewCommentV1(
  transport: Transport,
  input: CreateReviewCommentV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateReviewCommentV1Response> {
  const response = await transport.request({
    operationId: CREATE_REVIEW_COMMENT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/review/comment/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createReviewCommentV1ResponseSchema,
    response.body,
    CREATE_REVIEW_COMMENT_V1_OPERATION_ID,
  );
}
