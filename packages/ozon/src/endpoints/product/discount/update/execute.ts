import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { updateProductDiscountResponseSchema } from "./contract.js";
import type {
  UpdateProductDiscountRequest,
  UpdateProductDiscountResponse,
} from "./types.js";

export const UPDATE_PRODUCT_DISCOUNT_OPERATION_ID =
  "ProductAPI_ProductUpdateDiscount";

export async function executeUpdateProductDiscount(
  transport: Transport,
  input: UpdateProductDiscountRequest,
  options: OzonRequestOptions = {},
): Promise<UpdateProductDiscountResponse> {
  const response = await transport.request({
    operationId: UPDATE_PRODUCT_DISCOUNT_OPERATION_ID,
    method: "POST",
    path: "/v1/product/update/discount",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    updateProductDiscountResponseSchema,
    response.body,
    UPDATE_PRODUCT_DISCOUNT_OPERATION_ID,
  );
}
