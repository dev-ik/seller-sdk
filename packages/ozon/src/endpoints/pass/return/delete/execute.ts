import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { emptyPassResponseSchema } from "../../shared/contract.js";
import type { DeleteReturnPassesRequest } from "./types.js";

export const DELETE_RETURN_PASSES_OPERATION_ID = "returnPassDelete";

export async function executeDeleteReturnPasses(
  transport: Transport,
  input: DeleteReturnPassesRequest,
  options: OzonRequestOptions = {},
): Promise<void> {
  const response = await transport.request({
    operationId: DELETE_RETURN_PASSES_OPERATION_ID,
    method: "POST",
    path: "/v1/return/pass/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  parseOzonResponse(
    emptyPassResponseSchema,
    response.body,
    DELETE_RETURN_PASSES_OPERATION_ID,
  );
}
