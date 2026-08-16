import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyDraftTimeslotsResponseSchema } from "./contract.js";
import type {
  GetSupplyDraftTimeslotsRequest,
  GetSupplyDraftTimeslotsResponse,
} from "./types.js";
export const GET_SUPPLY_DRAFT_TIMESLOTS_OPERATION_ID = "DraftTimeslotInfo";
export async function executeGetSupplyDraftTimeslots(
  transport: Transport,
  input: GetSupplyDraftTimeslotsRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyDraftTimeslotsResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_DRAFT_TIMESLOTS_OPERATION_ID,
    method: "POST",
    path: "/v2/draft/timeslot/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyDraftTimeslotsResponseSchema,
    response.body,
    GET_SUPPLY_DRAFT_TIMESLOTS_OPERATION_ID,
  );
}
