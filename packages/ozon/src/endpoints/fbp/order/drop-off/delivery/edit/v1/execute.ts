import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { editFbpDropOffOrderDeliveryV1ResponseSchema } from "./contract.js";
import type {
  EditFbpDropOffOrderDeliveryV1Request,
  EditFbpDropOffOrderDeliveryV1Response,
} from "./types.js";

export const EDIT_FBP_DROP_OFF_ORDER_DELIVERY_V1_OPERATION_ID =
  "FbpAPI_FbpOrderDropOffDlvEdit";

export async function executeEditFbpDropOffOrderDeliveryV1(
  transport: Transport,
  input: EditFbpDropOffOrderDeliveryV1Request,
  options: OzonRequestOptions = {},
): Promise<EditFbpDropOffOrderDeliveryV1Response> {
  const response = await transport.request({
    operationId: EDIT_FBP_DROP_OFF_ORDER_DELIVERY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/drop-off/dlv/edit",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    editFbpDropOffOrderDeliveryV1ResponseSchema,
    response.body,
    EDIT_FBP_DROP_OFF_ORDER_DELIVERY_V1_OPERATION_ID,
  );
}
