import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbpOrderMutationResponseSchema } from "../../../shared/v1/contract.js";
import type {
  CancelFbpDropOffOrderV1Request,
  CancelFbpDropOffOrderV1Response,
} from "./types.js";

export const CANCEL_FBP_DROP_OFF_ORDER_V1_OPERATION_ID =
  "FbpAPI_FbpOrderDropOffCancel";

export async function executeCancelFbpDropOffOrderV1(
  transport: Transport,
  input: CancelFbpDropOffOrderV1Request,
  options: OzonRequestOptions = {},
): Promise<CancelFbpDropOffOrderV1Response> {
  const response = await transport.request({
    operationId: CANCEL_FBP_DROP_OFF_ORDER_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/drop-off/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpOrderMutationResponseSchema,
    response.body,
    CANCEL_FBP_DROP_OFF_ORDER_V1_OPERATION_ID,
  );
}
