import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { fbpOrderMutationResponseSchema } from "../../../../shared/v1/contract.js";
import type {
  EditFbpDirectOrderSellerDeliveryV1Request,
  EditFbpDirectOrderSellerDeliveryV1Response,
} from "./types.js";

export const EDIT_FBP_DIRECT_ORDER_SELLER_DELIVERY_V1_OPERATION_ID =
  "FbpAPI_FbpOrderDirectSellerDlvEdit";

export async function executeEditFbpDirectOrderSellerDeliveryV1(
  transport: Transport,
  input: EditFbpDirectOrderSellerDeliveryV1Request,
  options: OzonRequestOptions = {},
): Promise<EditFbpDirectOrderSellerDeliveryV1Response> {
  const response = await transport.request({
    operationId: EDIT_FBP_DIRECT_ORDER_SELLER_DELIVERY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/direct/seller-dlv/edit",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpOrderMutationResponseSchema,
    response.body,
    EDIT_FBP_DIRECT_ORDER_SELLER_DELIVERY_V1_OPERATION_ID,
  );
}
