import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listConditionalCancellationsResponseSchema } from "./contract.js";
import type {
  ListConditionalCancellationsRequest,
  ListConditionalCancellationsResponse,
} from "./types.js";

export const LIST_CONDITIONAL_CANCELLATIONS_OPERATION_ID =
  "CancellationAPI_GetConditionalCancellationListV2";

/** @internal */
export async function executeListConditionalCancellations(
  transport: Transport,
  input: ListConditionalCancellationsRequest,
  options: OzonRequestOptions = {},
): Promise<ListConditionalCancellationsResponse> {
  const response = await transport.request({
    operationId: LIST_CONDITIONAL_CANCELLATIONS_OPERATION_ID,
    method: "POST",
    path: "/v2/conditional-cancellation/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listConditionalCancellationsResponseSchema,
    response.body,
    LIST_CONDITIONAL_CANCELLATIONS_OPERATION_ID,
  );
}
