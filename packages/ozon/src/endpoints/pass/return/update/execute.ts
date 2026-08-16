import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { emptyPassResponseSchema } from "../../shared/contract.js";
import type { UpdateReturnPassesRequest } from "./types.js";

export const UPDATE_RETURN_PASSES_OPERATION_ID = "returnPassUpdate";

export async function executeUpdateReturnPasses(
  transport: Transport,
  input: UpdateReturnPassesRequest,
  options: OzonRequestOptions = {},
): Promise<void> {
  const response = await transport.request({
    operationId: UPDATE_RETURN_PASSES_OPERATION_ID,
    method: "POST",
    path: "/v1/return/pass/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  parseOzonResponse(
    emptyPassResponseSchema,
    response.body,
    UPDATE_RETURN_PASSES_OPERATION_ID,
  );
}
