import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { rejectConditionalCancellationResponseSchema } from "./contract.js";
import type { RejectConditionalCancellationRequest } from "./types.js";

export const REJECT_CONDITIONAL_CANCELLATION_OPERATION_ID =
  "CancellationAPI_ConditionalCancellationRejectV2";

/** @internal */
export async function executeRejectConditionalCancellation(
  transport: Transport,
  input: RejectConditionalCancellationRequest,
  options: OzonRequestOptions = {},
): Promise<void> {
  const response = await transport.request({
    operationId: REJECT_CONDITIONAL_CANCELLATION_OPERATION_ID,
    method: "POST",
    path: "/v2/conditional-cancellation/reject",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  parseOzonResponse(
    rejectConditionalCancellationResponseSchema,
    response.body,
    REJECT_CONDITIONAL_CANCELLATION_OPERATION_ID,
  );
}
