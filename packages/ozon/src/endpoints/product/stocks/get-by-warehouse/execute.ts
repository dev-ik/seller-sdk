import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductStocksByWarehouseResponseSchema } from "./contract.js";
import type {
  GetProductStocksByWarehouseRequest,
  GetProductStocksByWarehouseResponse,
} from "./types.js";

export const GET_PRODUCT_STOCKS_BY_WAREHOUSE_OPERATION_ID =
  "ProductInfoWarehouseStocks";

export async function executeGetProductStocksByWarehouse(
  transport: Transport,
  input: GetProductStocksByWarehouseRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductStocksByWarehouseResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_STOCKS_BY_WAREHOUSE_OPERATION_ID,
    method: "POST",
    path: "/v1/product/info/warehouse/stocks",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductStocksByWarehouseResponseSchema,
    response.body,
    GET_PRODUCT_STOCKS_BY_WAREHOUSE_OPERATION_ID,
  );
}
