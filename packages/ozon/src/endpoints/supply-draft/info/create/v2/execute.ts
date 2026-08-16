import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyDraftInfoResponseSchema } from "./contract.js";
import type {
  GetSupplyDraftInfoRequest,
  GetSupplyDraftInfoResponse,
} from "./types.js";
export const GET_SUPPLY_DRAFT_INFO_OPERATION_ID = "DraftCreateInfo";
export async function executeGetSupplyDraftInfo(
  transport: Transport,
  input: GetSupplyDraftInfoRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyDraftInfoResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_DRAFT_INFO_OPERATION_ID,
    method: "POST",
    path: "/v2/draft/create/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyDraftInfoResponseSchema,
    response.body,
    GET_SUPPLY_DRAFT_INFO_OPERATION_ID,
  );
}
