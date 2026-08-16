import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { sellerActionCreatedResponseSchema } from "../../../shared/v1/contract.js";
import type {
  CreateSellerMultiLevelDiscountActionV1Request,
  CreateSellerMultiLevelDiscountActionV1Response,
} from "./types.js";

export const CREATE_SELLER_MULTI_LEVEL_DISCOUNT_ACTION_V1_OPERATION_ID =
  "SellerActionsCreateMultiLevelDiscount";

export async function executeCreateSellerMultiLevelDiscountActionV1(
  transport: Transport,
  input: CreateSellerMultiLevelDiscountActionV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateSellerMultiLevelDiscountActionV1Response> {
  const response = await transport.request({
    operationId: CREATE_SELLER_MULTI_LEVEL_DISCOUNT_ACTION_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/create/multi-level-discount",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    sellerActionCreatedResponseSchema,
    response.body,
    CREATE_SELLER_MULTI_LEVEL_DISCOUNT_ACTION_V1_OPERATION_ID,
  );
}
