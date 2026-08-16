import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getProductStairwayDiscountByQuantityV1ResponseSchema } from "./contract.js";
import type {
  GetProductStairwayDiscountByQuantityV1Request,
  GetProductStairwayDiscountByQuantityV1Response,
} from "./types.js";

export const GET_PRODUCT_STAIRWAY_DISCOUNT_BY_QUANTITY_V1_OPERATION_ID =
  "ProductAPI_GetProductStairwayDiscountByQuantity";

export async function executeGetProductStairwayDiscountByQuantityV1(
  transport: Transport,
  input: GetProductStairwayDiscountByQuantityV1Request,
  options: OzonRequestOptions = {},
): Promise<GetProductStairwayDiscountByQuantityV1Response> {
  const response = await transport.request({
    operationId: GET_PRODUCT_STAIRWAY_DISCOUNT_BY_QUANTITY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/product/stairway-discount/by-quantity/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getProductStairwayDiscountByQuantityV1ResponseSchema,
    response.body,
    GET_PRODUCT_STAIRWAY_DISCOUNT_BY_QUANTITY_V1_OPERATION_ID,
  );
}
