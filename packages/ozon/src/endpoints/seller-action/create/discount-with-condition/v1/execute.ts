import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { sellerActionCreatedResponseSchema } from "../../../shared/v1/contract.js";
import type {
  CreateSellerDiscountWithConditionActionV1Request,
  CreateSellerDiscountWithConditionActionV1Response,
} from "./types.js";

export const CREATE_SELLER_DISCOUNT_WITH_CONDITION_ACTION_V1_OPERATION_ID =
  "SellerActionsCreateDiscountWithCondition";

export async function executeCreateSellerDiscountWithConditionActionV1(
  transport: Transport,
  input: CreateSellerDiscountWithConditionActionV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateSellerDiscountWithConditionActionV1Response> {
  const response = await transport.request({
    operationId: CREATE_SELLER_DISCOUNT_WITH_CONDITION_ACTION_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/seller-actions/create/discount-with-condition",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    sellerActionCreatedResponseSchema,
    response.body,
    CREATE_SELLER_DISCOUNT_WITH_CONDITION_ACTION_V1_OPERATION_ID,
  );
}
