import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbpOrderMutationResponseSchema } from "../../../shared/v1/contract.js";
import type {
  CancelFbpDirectOrderV1Request,
  CancelFbpDirectOrderV1Response,
} from "./types.js";

export const CANCEL_FBP_DIRECT_ORDER_V1_OPERATION_ID =
  "FbpAPI_FbpOrderDirectCancel";

export async function executeCancelFbpDirectOrderV1(
  transport: Transport,
  input: CancelFbpDirectOrderV1Request,
  options: OzonRequestOptions = {},
): Promise<CancelFbpDirectOrderV1Response> {
  const response = await transport.request({
    operationId: CANCEL_FBP_DIRECT_ORDER_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/direct/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpOrderMutationResponseSchema,
    response.body,
    CANCEL_FBP_DIRECT_ORDER_V1_OPERATION_ID,
  );
}
