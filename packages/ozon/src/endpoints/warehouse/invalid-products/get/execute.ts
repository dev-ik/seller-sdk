import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getWarehouseInvalidProductsResponseSchema } from "./contract.js";
import type {
  GetWarehouseInvalidProductsRequest,
  GetWarehouseInvalidProductsResponse,
} from "./types.js";

export const GET_WAREHOUSE_INVALID_PRODUCTS_OPERATION_ID =
  "WarehouseInvalidProductsGet";

export async function executeGetWarehouseInvalidProducts(
  transport: Transport,
  input: GetWarehouseInvalidProductsRequest,
  options: OzonRequestOptions = {},
): Promise<GetWarehouseInvalidProductsResponse> {
  const response = await transport.request({
    operationId: GET_WAREHOUSE_INVALID_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/invalid-products/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getWarehouseInvalidProductsResponseSchema,
    response.body,
    GET_WAREHOUSE_INVALID_PRODUCTS_OPERATION_ID,
  );
}
