import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { approveFbsCarriageResponseSchema } from "./contract.js";
import type {
  ApproveFbsCarriageRequest,
  ApproveFbsCarriageResponse,
} from "./types.js";

export const APPROVE_FBS_CARRIAGE_OPERATION_ID = "CarriageAPI_CarriageApprove";

export async function executeApproveFbsCarriage(
  transport: Transport,
  input: ApproveFbsCarriageRequest,
  options: OzonRequestOptions = {},
): Promise<ApproveFbsCarriageResponse> {
  const response = await transport.request({
    operationId: APPROVE_FBS_CARRIAGE_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/approve",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    approveFbsCarriageResponseSchema,
    response.body,
    APPROVE_FBS_CARRIAGE_OPERATION_ID,
  );
}
