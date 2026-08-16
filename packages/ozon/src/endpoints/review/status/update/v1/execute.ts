import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { updateReviewStatusV1ResponseSchema } from "./contract.js";
import type {
  UpdateReviewStatusV1Request,
  UpdateReviewStatusV1Response,
} from "./types.js";

export const UPDATE_REVIEW_STATUS_V1_OPERATION_ID =
  "ReviewAPI_ReviewChangeStatus";

export async function executeUpdateReviewStatusV1(
  transport: Transport,
  input: UpdateReviewStatusV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateReviewStatusV1Response> {
  const response = await transport.request({
    operationId: UPDATE_REVIEW_STATUS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/review/change-status",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updateReviewStatusV1ResponseSchema,
    response.body,
    UPDATE_REVIEW_STATUS_V1_OPERATION_ID,
  );
}
