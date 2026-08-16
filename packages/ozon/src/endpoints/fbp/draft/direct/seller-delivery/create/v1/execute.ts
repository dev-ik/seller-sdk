import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { fbpDirectDraftResponseSchema } from "../../../shared/v1/contract.js";
import type {
  CreateFbpDirectSellerDeliveryDraftV1Request,
  CreateFbpDirectSellerDeliveryDraftV1Response,
} from "./types.js";
export const CREATE_FBP_DIRECT_SELLER_DELIVERY_DRAFT_V1_OPERATION_ID =
  "FbpDraftDirectSellerDlvCreate";
export async function executeCreateFbpDirectSellerDeliveryDraftV1(
  transport: Transport,
  input: CreateFbpDirectSellerDeliveryDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbpDirectSellerDeliveryDraftV1Response> {
  const response = await transport.request({
    operationId: CREATE_FBP_DIRECT_SELLER_DELIVERY_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/direct/seller-dlv/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDirectDraftResponseSchema,
    response.body,
    CREATE_FBP_DIRECT_SELLER_DELIVERY_DRAFT_V1_OPERATION_ID,
  );
}
