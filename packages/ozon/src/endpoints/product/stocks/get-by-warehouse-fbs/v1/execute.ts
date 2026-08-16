import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getProductStocksByWarehouseFbsResponseSchema } from "./contract.js";
import type {
  GetProductStocksByWarehouseFbsRequest,
  GetProductStocksByWarehouseFbsResponse,
} from "./types.js";

export const GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_OPERATION_ID =
  "ProductAPI_ProductStocksByWarehouseFbs";

export async function executeGetProductStocksByWarehouseFbs(
  transport: Transport,
  input: GetProductStocksByWarehouseFbsRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductStocksByWarehouseFbsResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/info/stocks-by-warehouse/fbs",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductStocksByWarehouseFbsResponseSchema,
    response.body,
    GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_OPERATION_ID,
  );
}
