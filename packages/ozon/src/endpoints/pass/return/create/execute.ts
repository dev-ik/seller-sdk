import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { passCreationResponseSchema } from "../../shared/contract.js";
import type {
  CreateReturnPassesRequest,
  CreateReturnPassesResponse,
} from "./types.js";

export const CREATE_RETURN_PASSES_OPERATION_ID = "returnPassCreate";

export async function executeCreateReturnPasses(
  transport: Transport,
  input: CreateReturnPassesRequest,
  options: OzonRequestOptions = {},
): Promise<CreateReturnPassesResponse> {
  const response = await transport.request({
    operationId: CREATE_RETURN_PASSES_OPERATION_ID,
    method: "POST",
    path: "/v1/return/pass/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    passCreationResponseSchema,
    response.body,
    CREATE_RETURN_PASSES_OPERATION_ID,
  );
}
