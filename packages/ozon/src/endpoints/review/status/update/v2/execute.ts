import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import type {
  UpdateReviewStatusV2Request,
  UpdateReviewStatusV2Response,
} from "./types.js";

export const UPDATE_REVIEW_STATUS_V2_OPERATION_ID = "ReviewChangeStatusV2";

export async function executeUpdateReviewStatusV2(
  transport: Transport,
  input: UpdateReviewStatusV2Request,
  options: OzonRequestOptions = {},
): Promise<UpdateReviewStatusV2Response> {
  await transport.request({
    operationId: UPDATE_REVIEW_STATUS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/review/change-status",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
