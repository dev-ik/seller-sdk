import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { getFbsCarriageEttnStatusResponseSchema } from "./contract.js";
import type {
  GetFbsCarriageEttnStatusRequest,
  GetFbsCarriageEttnStatusResponse,
} from "./types.js";
export const GET_FBS_CARRIAGE_ETTN_STATUS_OPERATION_ID = "CarriageEttnStatus";
export async function executeGetFbsCarriageEttnStatus(
  transport: Transport,
  input: GetFbsCarriageEttnStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsCarriageEttnStatusResponse> {
  const response = await transport.request({
    operationId: GET_FBS_CARRIAGE_ETTN_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/ettn/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsCarriageEttnStatusResponseSchema,
    response.body,
    GET_FBS_CARRIAGE_ETTN_STATUS_OPERATION_ID,
  );
}
