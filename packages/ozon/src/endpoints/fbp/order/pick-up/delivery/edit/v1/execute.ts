import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { fbpOrderMutationResponseSchema } from "../../../../shared/v1/contract.js";
import type {
  EditFbpPickupOrderDeliveryV1Request,
  EditFbpPickupOrderDeliveryV1Response,
} from "./types.js";

export const EDIT_FBP_PICKUP_ORDER_DELIVERY_V1_OPERATION_ID =
  "FbpAPI_FbpOrderPickUpDlvEdit";

export async function executeEditFbpPickupOrderDeliveryV1(
  transport: Transport,
  input: EditFbpPickupOrderDeliveryV1Request,
  options: OzonRequestOptions = {},
): Promise<EditFbpPickupOrderDeliveryV1Response> {
  const response = await transport.request({
    operationId: EDIT_FBP_PICKUP_ORDER_DELIVERY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/pick-up/dlv/edit",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpOrderMutationResponseSchema,
    response.body,
    EDIT_FBP_PICKUP_ORDER_DELIVERY_V1_OPERATION_ID,
  );
}
