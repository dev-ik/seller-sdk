import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { setProductStairwayDiscountByQuantityV1ResponseSchema } from "./contract.js";
import type {
  SetProductStairwayDiscountByQuantityV1Request,
  SetProductStairwayDiscountByQuantityV1Response,
} from "./types.js";

export const SET_PRODUCT_STAIRWAY_DISCOUNT_BY_QUANTITY_V1_OPERATION_ID =
  "ProductAPI_SetProductStairwayDiscountByQuantity";

export async function executeSetProductStairwayDiscountByQuantityV1(
  transport: Transport,
  input: SetProductStairwayDiscountByQuantityV1Request,
  options: OzonRequestOptions = {},
): Promise<SetProductStairwayDiscountByQuantityV1Response> {
  const response = await transport.request({
    operationId: SET_PRODUCT_STAIRWAY_DISCOUNT_BY_QUANTITY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/product/stairway-discount/by-quantity/set",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    setProductStairwayDiscountByQuantityV1ResponseSchema,
    response.body,
    SET_PRODUCT_STAIRWAY_DISCOUNT_BY_QUANTITY_V1_OPERATION_ID,
  );
}
