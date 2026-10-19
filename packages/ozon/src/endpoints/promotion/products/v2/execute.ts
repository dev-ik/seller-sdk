import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listPromotionProductsV2ResponseSchema } from "./contract.js";
import type {
  ListPromotionProductsV2Request,
  ListPromotionProductsV2Response,
} from "./types.js";
export const LIST_PROMOTION_PRODUCTS_V2_OPERATION_ID = "ActionsProducts";
export async function executeListPromotionProductsV2(
  transport: Transport,
  input: ListPromotionProductsV2Request,
  options: OzonRequestOptions = {},
): Promise<ListPromotionProductsV2Response> {
  const response = await transport.request({
    operationId: LIST_PROMOTION_PRODUCTS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/actions/products",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listPromotionProductsV2ResponseSchema,
    response.body,
    LIST_PROMOTION_PRODUCTS_V2_OPERATION_ID,
  );
}
