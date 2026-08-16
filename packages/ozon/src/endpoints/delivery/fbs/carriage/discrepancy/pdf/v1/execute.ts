import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { getFbsCarriageDiscrepancyActResponseSchema } from "./contract.js";
import type {
  GetFbsCarriageDiscrepancyActRequest,
  GetFbsCarriageDiscrepancyActResponse,
} from "./types.js";
export const GET_FBS_CARRIAGE_DISCREPANCY_ACT_OPERATION_ID =
  "CarriageActDiscrepancyPDF";
export async function executeGetFbsCarriageDiscrepancyAct(
  transport: Transport,
  input: GetFbsCarriageDiscrepancyActRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsCarriageDiscrepancyActResponse> {
  const response = await transport.request({
    operationId: GET_FBS_CARRIAGE_DISCREPANCY_ACT_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/act-discrepancy/pdf",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsCarriageDiscrepancyActResponseSchema,
    response.body,
    GET_FBS_CARRIAGE_DISCREPANCY_ACT_OPERATION_ID,
  );
}
