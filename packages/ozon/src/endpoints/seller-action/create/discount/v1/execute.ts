import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { sellerActionCreatedResponseSchema } from "../../../shared/v1/contract.js";
import type {
  CreateSellerDiscountActionV1Request,
  CreateSellerDiscountActionV1Response,
} from "./types.js";

export const CREATE_SELLER_DISCOUNT_ACTION_V1_OPERATION_ID =
  "SellerActionsCreateDiscount";

export async function executeCreateSellerDiscountActionV1(
  transport: Transport,
  input: CreateSellerDiscountActionV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateSellerDiscountActionV1Response> {
  const response = await transport.request({
    operationId: CREATE_SELLER_DISCOUNT_ACTION_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/create/discount",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    sellerActionCreatedResponseSchema,
    response.body,
    CREATE_SELLER_DISCOUNT_ACTION_V1_OPERATION_ID,
  );
}
