import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createDirectSupplyDraftResponseSchema } from "./contract.js";
import type {
  CreateDirectSupplyDraftRequest,
  CreateDirectSupplyDraftResponse,
} from "./types.js";
export const CREATE_DIRECT_SUPPLY_DRAFT_OPERATION_ID = "DraftDirectCreate";
export async function executeCreateDirectSupplyDraft(
  transport: Transport,
  input: CreateDirectSupplyDraftRequest,
  options: OzonRequestOptions = {},
): Promise<CreateDirectSupplyDraftResponse> {
  const response = await transport.request({
    operationId: CREATE_DIRECT_SUPPLY_DRAFT_OPERATION_ID,
    method: "POST",
    path: "/v1/draft/direct/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createDirectSupplyDraftResponseSchema,
    response.body,
    CREATE_DIRECT_SUPPLY_DRAFT_OPERATION_ID,
  );
}
