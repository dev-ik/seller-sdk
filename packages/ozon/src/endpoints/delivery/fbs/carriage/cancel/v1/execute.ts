import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { cancelFbsCarriageResponseSchema } from "./contract.js";
import type {
  CancelFbsCarriageRequest,
  CancelFbsCarriageResponse,
} from "./types.js";

export const CANCEL_FBS_CARRIAGE_OPERATION_ID = "CarriageAPI_CarriageCancel";

export async function executeCancelFbsCarriage(
  transport: Transport,
  input: CancelFbsCarriageRequest,
  options: OzonRequestOptions = {},
): Promise<CancelFbsCarriageResponse> {
  const response = await transport.request({
    operationId: CANCEL_FBS_CARRIAGE_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    cancelFbsCarriageResponseSchema,
    response.body,
    CANCEL_FBS_CARRIAGE_OPERATION_ID,
  );
}
