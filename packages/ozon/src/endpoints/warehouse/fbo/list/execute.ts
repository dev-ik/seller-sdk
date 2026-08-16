import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listFboSupplyWarehousesResponseSchema } from "./contract.js";
import type {
  ListFboSupplyWarehousesRequest,
  ListFboSupplyWarehousesResponse,
} from "./types.js";

export const LIST_FBO_SUPPLY_WAREHOUSES_OPERATION_ID =
  "SupplyDraftAPI_DraftGetWarehouseFboList";

export async function executeListFboSupplyWarehouses(
  transport: Transport,
  input: ListFboSupplyWarehousesRequest,
  options: OzonRequestOptions = {},
): Promise<ListFboSupplyWarehousesResponse> {
  const response = await transport.request({
    operationId: LIST_FBO_SUPPLY_WAREHOUSES_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbo/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFboSupplyWarehousesResponseSchema,
    response.body,
    LIST_FBO_SUPPLY_WAREHOUSES_OPERATION_ID,
  );
}
