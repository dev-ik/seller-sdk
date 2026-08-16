import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { updateProductPricesResponseSchema } from "./contract.js";
import type {
  UpdateProductPricesRequest,
  UpdateProductPricesResponse,
} from "./types.js";

export const UPDATE_PRODUCT_PRICES_OPERATION_ID =
  "ProductAPI_ImportProductsPrices";

export async function executeUpdateProductPrices(
  transport: Transport,
  input: UpdateProductPricesRequest,
  options: OzonRequestOptions = {},
): Promise<UpdateProductPricesResponse> {
  const response = await transport.request({
    operationId: UPDATE_PRODUCT_PRICES_OPERATION_ID,
    method: "POST",
    path: "/v1/product/import/prices",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    updateProductPricesResponseSchema,
    response.body,
    UPDATE_PRODUCT_PRICES_OPERATION_ID,
  );
}
