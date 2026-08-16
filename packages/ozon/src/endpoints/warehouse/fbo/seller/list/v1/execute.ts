import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listFboSellerWarehousesResponseSchema } from "./contract.js";
import type { ListFboSellerWarehousesResponse } from "./types.js";
export const LIST_FBO_SELLER_WAREHOUSES_OPERATION_ID = "WarehouseFboSellerList";
export async function executeListFboSellerWarehouses(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListFboSellerWarehousesResponse> {
  const response = await transport.request({
    operationId: LIST_FBO_SELLER_WAREHOUSES_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbo/seller/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFboSellerWarehousesResponseSchema,
    response.body,
    LIST_FBO_SELLER_WAREHOUSES_OPERATION_ID,
  );
}
