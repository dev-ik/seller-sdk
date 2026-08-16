import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getProductPriceDetailsV1ResponseSchema } from "./contract.js";
import type {
  GetProductPriceDetailsV1Request,
  GetProductPriceDetailsV1Response,
} from "./types.js";

export const GET_PRODUCT_PRICE_DETAILS_V1_OPERATION_ID = "ProductPricesDetails";

export async function executeGetProductPriceDetailsV1(
  transport: Transport,
  input: GetProductPriceDetailsV1Request,
  options: OzonRequestOptions = {},
): Promise<GetProductPriceDetailsV1Response> {
  const response = await transport.request({
    operationId: GET_PRODUCT_PRICE_DETAILS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/product/prices/details",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getProductPriceDetailsV1ResponseSchema,
    response.body,
    GET_PRODUCT_PRICE_DETAILS_V1_OPERATION_ID,
  );
}
