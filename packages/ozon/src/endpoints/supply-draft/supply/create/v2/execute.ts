import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createSupplyOrderFromDraftResponseSchema } from "./contract.js";
import type {
  CreateSupplyOrderFromDraftRequest,
  CreateSupplyOrderFromDraftResponse,
} from "./types.js";
export const CREATE_SUPPLY_ORDER_FROM_DRAFT_OPERATION_ID = "DraftSupplyCreate";
export async function executeCreateSupplyOrderFromDraft(
  transport: Transport,
  input: CreateSupplyOrderFromDraftRequest,
  options: OzonRequestOptions = {},
): Promise<CreateSupplyOrderFromDraftResponse> {
  const response = await transport.request({
    operationId: CREATE_SUPPLY_ORDER_FROM_DRAFT_OPERATION_ID,
    method: "POST",
    path: "/v2/draft/supply/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createSupplyOrderFromDraftResponseSchema,
    response.body,
    CREATE_SUPPLY_ORDER_FROM_DRAFT_OPERATION_ID,
  );
}
