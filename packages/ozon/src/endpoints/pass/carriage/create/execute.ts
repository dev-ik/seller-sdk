import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { passCreationResponseSchema } from "../../shared/contract.js";
import type {
  CreateCarriagePassesRequest,
  CreateCarriagePassesResponse,
} from "./types.js";

export const CREATE_CARRIAGE_PASSES_OPERATION_ID = "carriagePassCreate";

export async function executeCreateCarriagePasses(
  transport: Transport,
  input: CreateCarriagePassesRequest,
  options: OzonRequestOptions = {},
): Promise<CreateCarriagePassesResponse> {
  const response = await transport.request({
    operationId: CREATE_CARRIAGE_PASSES_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/pass/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    passCreationResponseSchema,
    response.body,
    CREATE_CARRIAGE_PASSES_OPERATION_ID,
  );
}
