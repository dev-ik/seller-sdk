import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { editFbpDirectSellerDeliveryDraftV1ResponseSchema } from "./contract.js";
import type {
  EditFbpDirectSellerDeliveryDraftV1Request,
  EditFbpDirectSellerDeliveryDraftV1Response,
} from "./types.js";
export const EDIT_FBP_DIRECT_SELLER_DELIVERY_DRAFT_V1_OPERATION_ID =
  "FbpDraftDirectSellerDlvEdit";
export async function executeEditFbpDirectSellerDeliveryDraftV1(
  transport: Transport,
  input: EditFbpDirectSellerDeliveryDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<EditFbpDirectSellerDeliveryDraftV1Response> {
  const response = await transport.request({
    operationId: EDIT_FBP_DIRECT_SELLER_DELIVERY_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/direct/seller-dlv/edit",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    editFbpDirectSellerDeliveryDraftV1ResponseSchema,
    response.body,
    EDIT_FBP_DIRECT_SELLER_DELIVERY_DRAFT_V1_OPERATION_ID,
  );
}
