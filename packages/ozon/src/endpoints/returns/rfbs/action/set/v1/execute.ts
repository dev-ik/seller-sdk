import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  SetRfbsReturnActionV1Request,
  SetRfbsReturnActionV1Response,
} from "./types.js";
export const SET_RFBS_RETURN_ACTION_V1_OPERATION_ID =
  "ReturnsAPI_ReturnsRfbsActionSet";
export async function executeSetRfbsReturnActionV1(
  transport: Transport,
  input: SetRfbsReturnActionV1Request,
  options: OzonRequestOptions = {},
): Promise<SetRfbsReturnActionV1Response> {
  await transport.request({
    operationId: SET_RFBS_RETURN_ACTION_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/returns/rfbs/action/set",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
