import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbpOrderMutationResponseSchema } from "../../../shared/v1/contract.js";
import type {
  CancelFbpPickupOrderV1Request,
  CancelFbpPickupOrderV1Response,
} from "./types.js";

export const CANCEL_FBP_PICKUP_ORDER_V1_OPERATION_ID =
  "FbpAPI_FbpOrderPickUpCancel";

export async function executeCancelFbpPickupOrderV1(
  transport: Transport,
  input: CancelFbpPickupOrderV1Request,
  options: OzonRequestOptions = {},
): Promise<CancelFbpPickupOrderV1Response> {
  const response = await transport.request({
    operationId: CANCEL_FBP_PICKUP_ORDER_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/pick-up/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpOrderMutationResponseSchema,
    response.body,
    CANCEL_FBP_PICKUP_ORDER_V1_OPERATION_ID,
  );
}
