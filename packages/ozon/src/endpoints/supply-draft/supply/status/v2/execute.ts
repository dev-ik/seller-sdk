import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyOrderFromDraftStatusResponseSchema } from "./contract.js";
import type {
  GetSupplyOrderFromDraftStatusRequest,
  GetSupplyOrderFromDraftStatusResponse,
} from "./types.js";
export const GET_SUPPLY_ORDER_FROM_DRAFT_STATUS_OPERATION_ID =
  "DraftSupplyCreateStatus";
export async function executeGetSupplyOrderFromDraftStatus(
  transport: Transport,
  input: GetSupplyOrderFromDraftStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrderFromDraftStatusResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDER_FROM_DRAFT_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v2/draft/supply/create/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyOrderFromDraftStatusResponseSchema,
    response.body,
    GET_SUPPLY_ORDER_FROM_DRAFT_STATUS_OPERATION_ID,
  );
}
