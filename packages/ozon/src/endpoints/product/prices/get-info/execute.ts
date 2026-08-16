import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductPricesResponseSchema } from "./contract.js";
import type {
  GetProductPricesRequest,
  GetProductPricesResponse,
} from "./types.js";

export const GET_PRODUCT_PRICES_OPERATION_ID =
  "ProductAPI_GetProductInfoPrices";

export async function executeGetProductPrices(
  transport: Transport,
  input: GetProductPricesRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductPricesResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_PRICES_OPERATION_ID,
    method: "POST",
    path: "/v5/product/info/prices",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductPricesResponseSchema,
    response.body,
    GET_PRODUCT_PRICES_OPERATION_ID,
  );
}
