import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductStocksResponseSchema } from "./contract.js";
import type {
  GetProductStocksRequest,
  GetProductStocksResponse,
} from "./types.js";

export const GET_PRODUCT_STOCKS_OPERATION_ID =
  "ProductAPI_GetProductInfoStocks";

export async function executeGetProductStocks(
  transport: Transport,
  input: GetProductStocksRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductStocksResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_STOCKS_OPERATION_ID,
    method: "POST",
    path: "/v4/product/info/stocks",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductStocksResponseSchema,
    response.body,
    GET_PRODUCT_STOCKS_OPERATION_ID,
  );
}
