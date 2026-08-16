import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listFboProductStocksByWarehouseV1ResponseSchema } from "./contract.js";
import type {
  ListFboProductStocksByWarehouseV1Request,
  ListFboProductStocksByWarehouseV1Response,
} from "./types.js";
export const LIST_FBO_PRODUCT_STOCKS_BY_WAREHOUSE_V1_OPERATION_ID =
  "GetProductInfoStocksByWarehouseFbo";
export async function executeListFboProductStocksByWarehouseV1(
  transport: Transport,
  input: ListFboProductStocksByWarehouseV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFboProductStocksByWarehouseV1Response> {
  const response = await transport.request({
    operationId: LIST_FBO_PRODUCT_STOCKS_BY_WAREHOUSE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/product/info/stocks-by-warehouse/fbo",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFboProductStocksByWarehouseV1ResponseSchema,
    response.body,
    LIST_FBO_PRODUCT_STOCKS_BY_WAREHOUSE_V1_OPERATION_ID,
  );
}
