import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { updatePromotionProductsV1ResponseSchema } from "./contract.js";
import type {
  UpdatePromotionProductsV1Request,
  UpdatePromotionProductsV1Response,
} from "./types.js";
export const UPDATE_PROMOTION_PRODUCTS_V1_OPERATION_ID =
  "ActionsProductsUpdate";
export async function executeUpdatePromotionProductsV1(
  transport: Transport,
  input: UpdatePromotionProductsV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdatePromotionProductsV1Response> {
  const response = await transport.request({
    operationId: UPDATE_PROMOTION_PRODUCTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/actions/products/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updatePromotionProductsV1ResponseSchema,
    response.body,
    UPDATE_PROMOTION_PRODUCTS_V1_OPERATION_ID,
  );
}
