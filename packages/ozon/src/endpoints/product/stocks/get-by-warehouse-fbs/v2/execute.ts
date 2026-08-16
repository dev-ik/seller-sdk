import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getProductStocksByWarehouseFbsV2ResponseSchema } from "./contract.js";
import type {
  GetProductStocksByWarehouseFbsV2Request,
  GetProductStocksByWarehouseFbsV2Response,
} from "./types.js";

export const GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_V2_OPERATION_ID =
  "ProductAPI_GetProductInfoStocksByWarehouseFbsV2";

export async function executeGetProductStocksByWarehouseFbsV2(
  transport: Transport,
  input: GetProductStocksByWarehouseFbsV2Request,
  options: OzonRequestOptions = {},
): Promise<GetProductStocksByWarehouseFbsV2Response> {
  const response = await transport.request({
    operationId: GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/product/info/stocks-by-warehouse/fbs",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductStocksByWarehouseFbsV2ResponseSchema,
    response.body,
    GET_PRODUCT_STOCKS_BY_WAREHOUSE_FBS_V2_OPERATION_ID,
  );
}
