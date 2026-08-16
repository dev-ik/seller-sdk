import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createCrossdockSupplyDraftResponseSchema } from "./contract.js";
import type {
  CreateCrossdockSupplyDraftRequest,
  CreateCrossdockSupplyDraftResponse,
} from "./types.js";
export const CREATE_CROSSDOCK_SUPPLY_DRAFT_OPERATION_ID =
  "DraftCrossdockCreate";
export async function executeCreateCrossdockSupplyDraft(
  transport: Transport,
  input: CreateCrossdockSupplyDraftRequest,
  options: OzonRequestOptions = {},
): Promise<CreateCrossdockSupplyDraftResponse> {
  const response = await transport.request({
    operationId: CREATE_CROSSDOCK_SUPPLY_DRAFT_OPERATION_ID,
    method: "POST",
    path: "/v1/draft/crossdock/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createCrossdockSupplyDraftResponseSchema,
    response.body,
    CREATE_CROSSDOCK_SUPPLY_DRAFT_OPERATION_ID,
  );
}
