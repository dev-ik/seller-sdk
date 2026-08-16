import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { approveConditionalCancellationResponseSchema } from "./contract.js";
import type { ApproveConditionalCancellationRequest } from "./types.js";

export const APPROVE_CONDITIONAL_CANCELLATION_OPERATION_ID =
  "CancellationAPI_ConditionalCancellationApproveV2";

/** @internal */
export async function executeApproveConditionalCancellation(
  transport: Transport,
  input: ApproveConditionalCancellationRequest,
  options: OzonRequestOptions = {},
): Promise<void> {
  const response = await transport.request({
    operationId: APPROVE_CONDITIONAL_CANCELLATION_OPERATION_ID,
    method: "POST",
    path: "/v2/conditional-cancellation/approve",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  parseOzonResponse(
    approveConditionalCancellationResponseSchema,
    response.body,
    APPROVE_CONDITIONAL_CANCELLATION_OPERATION_ID,
  );
}
