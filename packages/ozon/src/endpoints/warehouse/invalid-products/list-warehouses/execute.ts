import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listWarehousesWithInvalidProductsResponseSchema } from "./contract.js";
import type { ListWarehousesWithInvalidProductsResponse } from "./types.js";

export const LIST_WAREHOUSES_WITH_INVALID_PRODUCTS_OPERATION_ID =
  "WarehouseWithInvalidProducts";

export async function executeListWarehousesWithInvalidProducts(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListWarehousesWithInvalidProductsResponse> {
  const response = await transport.request({
    operationId: LIST_WAREHOUSES_WITH_INVALID_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/warehouses-with-invalid-products",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listWarehousesWithInvalidProductsResponseSchema,
    response.body,
    LIST_WAREHOUSES_WITH_INVALID_PRODUCTS_OPERATION_ID,
  );
}
