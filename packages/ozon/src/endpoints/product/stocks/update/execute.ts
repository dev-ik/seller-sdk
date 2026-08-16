import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { updateProductStocksResponseSchema } from "./contract.js";
import type {
  UpdateProductStocksRequest,
  UpdateProductStocksResponse,
} from "./types.js";

export const UPDATE_PRODUCT_STOCKS_OPERATION_ID = "ProductAPI_ProductsStocksV2";

export async function executeUpdateProductStocks(
  transport: Transport,
  input: UpdateProductStocksRequest,
  options: OzonRequestOptions = {},
): Promise<UpdateProductStocksResponse> {
  const response = await transport.request({
    operationId: UPDATE_PRODUCT_STOCKS_OPERATION_ID,
    method: "POST",
    path: "/v2/products/stocks",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    updateProductStocksResponseSchema,
    response.body,
    UPDATE_PRODUCT_STOCKS_OPERATION_ID,
  );
}
